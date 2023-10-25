import express from "express";
import payload from "payload";
import dotenv from "dotenv";
import { testCredentials } from "./credentials";

dotenv.config();

const app = express();
const port = process.env.PAYLOAD_PORT;

const globalSetup = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
  });

  app.listen(port, async () => {
    console.log(
      `Express is now listening for incoming connections on port ${port}.`,
    );
  });

  const response = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/users/first-register`,
    {
      body: JSON.stringify(testCredentials),
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
    },
  );

  const data = await response.json();

  if (!data.user || !data.user.token) {
    throw new Error("Failed to register first user");
  }
};

export default globalSetup;
