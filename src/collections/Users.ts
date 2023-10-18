import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  labels: {
    singular: "Utilisateur",
    plural: "Utilisateurs",
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          type: "text",
          name: "first_name",
          label: "Prénom",
        },
        { type: "text", name: "last_name", label: "Nom" },
      ],
    },
    {
      type: "select",
      name: "roles",
      label: "Rôles",
      hasMany: false,
      options: [{ value: "admin", label: "Administrateur" }],
      saveToJWT: true,
    },
  ],
};

export default Users;
