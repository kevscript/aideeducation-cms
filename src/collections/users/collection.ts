import { SelectRoleField } from "../../components/SelectRole";
import {
  adminUserAccess,
  deleteUserAccess,
  readUserAccess,
  updateUserAccess,
} from "./access";

import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    verify: false,
    disableLocalStrategy: true,
  },
  admin: {
    group: "Administration",
    useAsTitle: "email",
    defaultColumns: ["lastname", "firstname", "email", "role"],
  },
  access: {
    create: () => false,
    update: updateUserAccess,
    read: readUserAccess,
    delete: deleteUserAccess,
    admin: adminUserAccess,
  },
  fields: [
    {
      name: "email",
      type: "email",
      label: "Email",
      unique: true,
      required: true,
      saveToJWT: true,
      admin: { readOnly: true },
      access: { update: () => false },
    },
    {
      name: "sub",
      label: "sub",
      type: "text",
      admin: { disabled: true },
      access: { update: () => false },
    },
    {
      name: "firstname",
      label: "Prénom",
      type: "text",
      admin: { readOnly: true },
      access: { update: () => false },
    },
    {
      name: "lastname",
      label: "Nom de famille",
      type: "text",
      admin: { readOnly: true },
      access: { update: () => false },
    },
    {
      name: "pictureURL",
      label: "pictureURL",
      type: "text",
      admin: { readOnly: true, hidden: true },
      access: { update: () => false },
    },
    SelectRoleField,
  ],
};
