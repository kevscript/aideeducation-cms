import { Access } from "payload/config";

export const isAdminOrPublished: Access = ({ req: { user } }) => {
  if (user && user.role === "admin") {
    return true;
  }

  return {
    published: { equals: true },
  };
};
