import { User } from "payload/generated-types";
import { CmsRole } from "../constants/roles";

type Credentials = {
  [key in CmsRole["value"]]: Omit<User, "id" | "createdAt" | "updatedAt">;
};

export const credentials: Credentials = {
  admin: {
    email: "test@ae.com",
    password: "test",
    first_name: "John",
    last_name: "Doe",
    role: "admin",
  },
  editor: {
    email: "editor@ae.com",
    password: "editor",
    first_name: "Tom",
    last_name: "Hanks",
    role: "editor",
  },
};
