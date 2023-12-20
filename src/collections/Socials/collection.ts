import { CollectionConfig } from "payload/types";
import { isAdminOrPublished } from "../../access/isAdminOrPublished";
import { isAdminField } from "../../access/isAdmin";
import orderField from "../../components/OrderField/config";

export const Socials: CollectionConfig = {
  slug: "socials",
  admin: {
    group: "Contenu",
    description: "Les réseaux sociaux de l'association",
    useAsTitle: "name",
    defaultColumns: ["name", "link", "published", "order", "updatedAt"],
  },
  defaultSort: "order",
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
          admin: { width: "30%" },
        },
        {
          type: "text",
          name: "link",
          required: true,
          label: "Lien",
          maxLength: 1000,
          admin: { width: "70%" },
        },
      ],
    },

    {
      type: "upload",
      name: "icon",
      relationTo: "icons",
      required: false,
      label: "Icône",
    },
    orderField,
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
