import { Access } from "payload/config";
import { User } from "payload/generated-types";

export const isAdminOrSelf: Access<unknown, User> = ({ req }) => {
  if (req.user) {
    // if user is admin
    if (req.user.role === "admin") {
      return true;
    }

    // if not admin, only provide access to themselves
    return {
      id: { equals: req.user.id },
    };
  }

  // reject for anyone else
  return false;
};
