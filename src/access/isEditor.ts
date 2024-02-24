import { Access } from "payload/config";
import { User } from "payload/generated-types";
import { FieldAccess } from "payload/types";

export const isEditor: Access<unknown, User> = ({ req: { user } }) => {
  if (user) {
    if (user.role === "root" || user.role === "admin" || user.role === "editor") {
      return true;
    }
  }

  return false;
};

export const isEditorField: FieldAccess<{ id: string }, unknown, User> = ({
  req: { user },
}) => {
  if (user) {
    if (user.role === "root" || user.role === "admin" || user.role === "editor") {
      return true;
    }
  }

  return false;
};
