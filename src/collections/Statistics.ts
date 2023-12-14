import { CollectionConfig } from "payload/types";
import { isAdminOrPublished } from "../access/isAdminOrPublished";
import { isAdminField } from "../access/isAdmin";

export const Statistics: CollectionConfig = {
  slug: "statistics",
  admin: {
    group: "Contenu",
    description: "L'association à travers les chiffres.",
    useAsTitle: "value",
    defaultColumns: ["value", "published", "updatedAt", "createdAt"],
  },
  labels: {
    singular: "Statistique",
    plural: "Statistiques",
  },
  access: {
    read: isAdminOrPublished,
  },
  fields: [
    {
      type: "text",
      name: "value",
      required: true,
      label: "Statistique",
      maxLength: 16,
    },
    {
      type: "textarea",
      name: "description",
      required: true,
      label: "Description",
      maxLength: 80,
    },
    {
      type: "upload",
      relationTo: "icons",
      name: "icon",
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
  ],
};

export default Statistics;
