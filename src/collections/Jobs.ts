import { CollectionConfig } from "payload/types";

export const Jobs: CollectionConfig = {
  slug: "jobs",
  admin: { description: "Postes à pourvoir au sein de l'association." },
  labels: {
    singular: "Recrutement",
    plural: "Recrutements",
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "role",
          type: "text",
          required: true,
          label: "Poste",
          admin: { width: "80%" },
        },
        {
          name: "status",
          type: "select",
          required: true,
          label: "Statut de recrutement",
          hasMany: false,
          options: [
            { value: "active", label: "Actif" },
            { value: "inactive", label: "Inactif" },
          ],
          defaultValue: "active",
          admin: { width: "20%" },
        },
      ],
    },
    { name: "description", type: "textarea", label: "Description du rôle" },
    {
      name: "visible",
      type: "checkbox",
      required: true,
      defaultValue: true,
      label: "Publier sur le site",
    },
    // job image
  ],
};

export default Jobs;
