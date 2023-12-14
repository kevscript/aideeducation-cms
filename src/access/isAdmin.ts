import { Access } from "payload/config";
import { User } from "payload/generated-types";
import { FieldAccess } from "payload/types";

export const isAdmin: Access<unknown, User> = ({ req }) => {
  if (req.user && req.user.role === "admin") {
    return true;
  }
  return false;
};

export const isAdminField: FieldAccess<{ id: string }, unknown, User> = ({
  req,
}) => {
  if (req.user && req.user.role === "admin") {
    return true;
  }
  return false;
};
