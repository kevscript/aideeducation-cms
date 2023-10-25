import { User } from "payload/generated-types";

export const testCredentials: Partial<User> = {
  email: "test@ae.com",
  password: "test",
  first_name: "John",
  last_name: "Doe",
  role: "admin",
} as const;
