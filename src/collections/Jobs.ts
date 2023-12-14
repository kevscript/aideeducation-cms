import { CollectionConfig } from "payload/types";
import { isAdminField } from "../access/isAdmin";

export const Jobs: CollectionConfig = {
  slug: "jobs",
  admin: {
    group: "Contenu",
    description: "Postes à pourvoir au sein de l'association.",
    useAsTitle: "role",
  },
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
          unique: true,
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
    {
      name: "description",
      type: "textarea",
      label: "Description du rôle",
      required: true,
    },
    {
      name: "icon",
      type: "upload",
      relationTo: "icons",
      label: "Icône représentative",
      required: false,
    },
    {
      type: "checkbox",
      name: "published",
      required: true,
      defaultValue: true,
      label: "Publier",
      access: {
        read: isAdminField,
        create: isAdminField,
        update: isAdminField,
      },
    },

    // job image
  ],
};

export default Jobs;
