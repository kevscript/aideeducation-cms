import express from "express";
import payload from "payload";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import passport from "passport";
import session from "express-session";
import jwt from "jsonwebtoken";
import getCookieExpiration from "payload/dist/utilities/getCookieExpiration";
import MongoStore from "connect-mongo";
import { GoogleOAuthStrategy } from "./auth/google-strategy";

dotenv.config();
const app = express();

const prod = process.env.NODE_ENV === "production";
const clientUrl = prod ? process.env.PAYLOAD_CLIENT_URL : `http://localhost:3000`;
app.use(
  cors({
    origin: [clientUrl],
  }),
);

// this is called to initialize the auth processs
app.get("/oauth2/authorize", passport.authenticate("googleOauth"));

// this is the callback called by google and here we need to initialize the session for our user with the jwt
app.get(
  "/oauth/google/callback",
  // Initialize session middleware with configuration options
  session({
    resave: false, // Prevents resaving session if not modified
    saveUninitialized: false, // Prevents saving uninitialized sessions
    secret: process.env.PAYLOAD_SECRET || "default_secret", // Secret for signing the session ID cookie
    store: process.env.DATABASE_URI
      ? MongoStore.create({ mongoUrl: process.env.DATABASE_URI })
      : undefined, // Session store configuration
  }),

  // Passport middleware to handle OAuth2 authentication
  passport.authenticate("googleOauth", { failureRedirect: "/login" }),

  // Callback function executed after successful authentication
  function (req, res) {
    // Access configuration for the 'users' collection
    const collectionConfig = payload.collections["users"].config;

    // Select the fields from the user object to include in the JWT
    const fieldsToSign = {
      email: req.user.email, // User's email
      id: req.user.id, // User's ID
      collection: "users", // Collection to which the user belongs
    };

    // Sign the JWT with selected fields
    const token = jwt.sign(fieldsToSign, payload.secret, {
      expiresIn: collectionConfig.auth.tokenExpiration, // Set token expiration as per configuration
    });

    // Set a cookie in the response with the JWT
    res.cookie(`${payload.config.cookiePrefix}-token`, token, {
      path: "/", // Cookie path
      httpOnly: true, // HttpOnly flag for security
      expires: getCookieExpiration(collectionConfig.auth.tokenExpiration), // Cookie expiration time
      secure: collectionConfig.auth.cookies.secure, // Secure flag (for HTTPS)
      sameSite: collectionConfig.auth.cookies.sameSite, // SameSite attribute
      domain: collectionConfig.auth.cookies.domain || undefined, // Cookie domain
    });

    // Redirect user to the admin dashboard after successful authentication
    res.redirect("/admin");
  },
);

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {
  // serve static files
  app.use("/assets", express.static(path.resolve(__dirname, "./assets")));
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload listening at ${payload.getAdminURL()}`);
    },
  });

  // Configure Passport with Google OAuth Strategy
  passport.use("googleOauth", GoogleOAuthStrategy);

  // Serialize the user to the session
  // Only the user ID is stored in the session for efficiency.
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // Deserialize the user from the session
  // This is used to retrieve the full user information based on the stored ID.
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await payload.findByID({ collection: "users", id: id as string });
      done(null, user);
    } catch (error) {
      done(error);
    }
  });

  // Add your own express routes here

  app.listen("4000");
};

start();
