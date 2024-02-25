import { Access } from "payload/config";
import { User } from "payload/generated-types";
import { CMS_ROLES } from "../../auth/roles";

export const deleteUserAccess: Access<unknown, User> = ({ req: { user } }) => {
  if (user) {
    if (user.role === CMS_ROLES.root.value) {
      return {
        role: { not_equals: CMS_ROLES.root.value },
      };
    }

    if (user.role === CMS_ROLES.admin.value) {
      return {
        and: [
          { role: { not_equals: CMS_ROLES.root.value } },
          { role: { not_equals: CMS_ROLES.admin.value } },
        ],
      };
    }
  }

  return false;
};

export const updateUserAccess: Access<unknown, User> = ({ req: { user } }) => {
  if (user) {
    if (user.role === CMS_ROLES.root.value) {
      return {
        role: { not_equals: CMS_ROLES.root.value },
      };
    }

    if (user.role === CMS_ROLES.admin.value) {
      return {
        and: [
          { role: { not_equals: CMS_ROLES.admin.value } },
          { role: { not_equals: CMS_ROLES.root.value } },
        ],
      };
    }
  }

  return false;
};

export const readUserAccess: Access<unknown, User> = ({ req: { user } }) => {
  if (user) {
    if (user.role === CMS_ROLES.root.value) {
      return true;
    }

    if (user.role === CMS_ROLES.admin.value) {
      return {
        role: { not_equals: CMS_ROLES.root.value },
      };
    }

    return {
      id: {
        equals: user.id,
      },
    };
  }

  return false;
};

export const adminUserAccess = ({ req: { user } }) => {
  if (user) {
    if (
      user.role === CMS_ROLES.root.value ||
      user.role === CMS_ROLES.admin.value ||
      user.role === CMS_ROLES.editor.value
    ) {
      return true;
    }
  }

  return false;
};
