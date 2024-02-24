import OAuth2Strategy from "passport-oauth2";
import axios from "axios";
import payload from "payload";
import crypto from "crypto";
import dotenv from "dotenv";
import { CmsRolesObjectKeys } from "./roles";
dotenv.config();

type CreateGoogleUserData = {
  firstname: string;
  lastname: string;
  email: string;
  sub: string;
  role: CmsRolesObjectKeys;
  pictureUrl: string;
};

// Google OAuth Strategy for Passport
export const GoogleOAuthStrategy = new OAuth2Strategy(
  {
    // OAuth configuration
    // important to note is the scope of the requested information
    authorizationURL:
      "https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile",
    tokenURL: "https://accounts.google.com/o/oauth2/token",
    clientID: process.env.GOOGLE_CLIENT_ID, // Google Client ID from environment variables
    clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Google Client Secret from environment variables
    callbackURL: process.env.GOOGLE_CALLBACK_URL, // Callback URL for Google OAuth
  },
  // Verification function
  async function (accessToken, refreshToken, profile, cb) {
    // Fetch user profile from Google
    try {
      const userProfileURL = "https://www.googleapis.com/oauth2/v3/userinfo";
      const response = await axios.get(userProfileURL, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const { email, sub, picture, given_name, family_name } = response.data;

      // Extract necessary data from user profile
      const collectionSlug = "users";
      const newGoogleUser: CreateGoogleUserData = {
        email: email,
        sub: sub,
        pictureUrl: picture,
        role: email === process.env.ROOT_USER_EMAIL ? "root" : "pending",
        firstname: given_name,
        lastname: family_name,
      };

      // Find or create user in the database
      const user = await findOrCreateGoogleUser(collectionSlug, newGoogleUser);

      // Pass the user to the callback
      cb(null, user);
    } catch (e) {
      console.error("Authentication failed:", e);
      cb(e);
    }
  },
);

// Helper function to find or create user
async function findOrCreateGoogleUser(
  collectionSlug,
  googleUserData: CreateGoogleUserData,
) {
  const users = await payload.find({
    collection: collectionSlug,
    where: { sub: { equals: googleUserData.sub } },
    showHiddenFields: true,
  });

  // If user exists, return the user
  if (users.docs && users.docs.length) {
    const user = users.docs[0];
    user.collection = collectionSlug;
    user._strategy = "googleOauth";
    return user;
  } else {
    // Generate a secure random password
    const randomPassword = crypto.randomBytes(20).toString("hex");

    // Register new user
    return await payload.create({
      collection: collectionSlug,
      data: {
        ...googleUserData,
        password: randomPassword,
      },
      showHiddenFields: true,
    });
  }
}
