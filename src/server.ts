import express from "express";
import payload from "payload";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 3000;

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(
        `Payload listening at http://localhost:${port + payload.getAdminURL()}`,
      );
    },
  });

  // Add your own express routes here

  app.listen(port);
};

start();
