import express from "express";
import payload from "payload";
import dotenv from "dotenv";
import { credentials } from "./credentials";

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

  const registerAdminUser = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/users/first-register`,
    {
      body: JSON.stringify(credentials.admin),
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
    },
  );

  const registerAdminUserData = await registerAdminUser.json();

  if (!registerAdminUserData.user || !registerAdminUserData.user.token) {
    throw new Error("Failed to register first user");
  }

  const createdEditorUser = await payload.create({
    collection: "users",
    data: credentials.editor,
  });

  if (!createdEditorUser) {
    throw new Error("Failed to create an Editor User");
  }
};

export default globalSetup;
