import { CollectionConfig } from "payload/types";
import { isAdminOrPublished } from "../access/isAdminOrPublished";
import { isAdminField } from "../access/isAdmin";

export const Socials: CollectionConfig = {
  slug: "socials",
  admin: {
    group: "Contenu",
    description: "Les réseaux sociaux de l'association",
    useAsTitle: "name",
    defaultColumns: ["order", "name", "link", "published", "updatedAt", "createdAt"],
  },
  defaultSort: "sort",
  labels: {
    singular: "Réseau",
    plural: "Réseaux",
  },
  access: {
    read: isAdminOrPublished,
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          type: "text",
          name: "name",
          required: true,
          label: "Réseau",
          maxLength: 30,
          unique: true,
        },
        {
          type: "number",
          name: "order",
          label: "Ordre",
          required: true,
          defaultValue: 1,
          admin: { style: { minWidth: "128px", maxWidth: "160px" } },
        },
      ],
    },

    {
      type: "text",
      name: "link",
      required: true,
      label: "Lien",
      maxLength: 1000,
    },
    {
      type: "upload",
      name: "icon",
      relationTo: "icons",
      required: false,
      label: "Icône",
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

export default Socials;
