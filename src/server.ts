import express from "express";
import payload from "payload";
import dotenv from "dotenv";
import path from "path";

dotenv.config();
const app = express();

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
      payload.logger.info(
        `Payload listening at ${
          process.env.PAYLOAD_PUBLIC_SERVER_URL + payload.getAdminURL()
        }`,
      );
    },
  });

  // Add your own express routes here

  app.listen(process.env.PAYLOAD_PORT);
};

start();
