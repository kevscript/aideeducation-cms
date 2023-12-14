import { CollectionConfig } from "payload/types";
import { isAdminOrPublished } from "../access/isAdminOrPublished";
import { isAdminField } from "../access/isAdmin";

export const Socials: CollectionConfig = {
  slug: "socials",
  admin: {
    group: "Contenu",
    description: "Les réseaux sociaux de l'association",
    useAsTitle: "name",
    defaultColumns: ["name", "link", "published", "updatedAt", "createdAt"],
  },
  labels: {
    singular: "Réseau Social",
    plural: "Réseaux Sociaux",
  },
  access: {
    read: isAdminOrPublished,
  },
  fields: [
    {
      type: "text",
      name: "name",
      required: true,
      label: "Réseau Social",
      maxLength: 30,
      unique: true,
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
      label: "Icône du réseau social",
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
