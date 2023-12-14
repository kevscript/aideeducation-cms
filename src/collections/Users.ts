import { CollectionConfig } from "payload/types";
import { CMS_ROLES } from "../access/roles";
import { isAdmin, isAdminField } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    group: "Administration",
    useAsTitle: "email",
  },
  labels: {
    singular: "Utilisateur",
    plural: "Utilisateurs",
  },
  access: {
    create: isAdmin,
    read: isAdminOrSelf,
    update: isAdminOrSelf,
    delete: isAdmin,
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          type: "text",
          name: "first_name",
          label: "Prénom",
          required: true,
          access: {
            create: isAdminField,
            update: isAdminField,
          },
        },
        {
          type: "text",
          name: "last_name",
          label: "Nom",
          required: true,
          access: {
            create: isAdminField,
            update: isAdminField,
          },
        },
      ],
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      unique: true,
      required: true,
      saveToJWT: true,
      access: {
        create: isAdminField,
        update: isAdminField,
      },
    },
    {
      type: "select",
      name: "role",
      label: "Rôle CMS",
      hasMany: false,
      required: true,
      options: [...CMS_ROLES],
      defaultValue: CMS_ROLES.find((r) => r.label === "Editeur").value,
      saveToJWT: true,
      access: {
        create: isAdminField,
        update: isAdminField,
      },
    },
  ],
};

export default Users;
