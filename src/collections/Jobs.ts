import { CollectionConfig } from "payload/types";
import { isAdminField } from "../access/isAdmin";

export const Jobs: CollectionConfig = {
  slug: "jobs",
  admin: {
    group: "Contenu",
    description: "Postes à pourvoir au sein de l'association.",
    useAsTitle: "role",
    defaultColumns: ["order", "role", "status", "published"],
  },
  defaultSort: "sort",
  labels: {
    singular: "Poste",
    plural: "Postes",
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "role",
          type: "text",
          required: true,
          label: "Rôle",
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
      label: "Icône",
      required: false,
    },
    {
      type: "number",
      name: "order",
      label: "Ordre",
      required: true,
      defaultValue: 1,
      admin: { style: { width: "80px" } },
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
