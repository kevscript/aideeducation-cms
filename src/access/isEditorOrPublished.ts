import { Access } from "payload/config";
import { User } from "payload/generated-types";

export const isEditorOrPublished: Access<unknown, User> = ({ req: { user } }) => {
  if (user) {
    if (user.role === "root" || user.role === "admin" || user.role === "editor") {
      return true;
    }
  }

  return {
    published: { equals: true },
  };
};
