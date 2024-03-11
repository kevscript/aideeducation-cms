import { CollectionConfig } from "payload/types";
import { orderField } from "../../components/order/config";
import { publishedField } from "../../components/published/config";
import { isEditorOrPublished } from "../../access/isEditorOrPublished";
import { isEditor } from "../../access/isEditor";

export const Socials: CollectionConfig = {
  slug: "socials",
  admin: {
    group: "Global",
    description: "Les réseaux sociaux de l'association",
    useAsTitle: "name",
    defaultColumns: ["name", "link", "published", "order", "updatedAt"],
  },
  defaultSort: "order",
  labels: {
    singular: "Réseau Social",
    plural: "Réseaux Sociaux",
  },
  access: {
    read: isEditorOrPublished,
    create: isEditor,
    update: isEditor,
    delete: isEditor,
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
      required: true,
      label: "Icône",
    },
    orderField,
    publishedField,
  ],
};
