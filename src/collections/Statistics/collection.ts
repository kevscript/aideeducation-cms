import { CollectionConfig } from "payload/types";
import { isAdminOrPublished } from "../../access/isAdminOrPublished";
import { isAdminField } from "../../access/isAdmin";
import orderField from "../../components/OrderField/config";

export const Statistics: CollectionConfig = {
  slug: "statistics",
  admin: {
    group: "Contenu",
    description: "L'association à travers les chiffres.",
    useAsTitle: "value",
    defaultColumns: ["value", "description", "published", "order", "updatedAt"],
  },
  defaultSort: "order",
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
      maxLength: 32,
    },
    {
      type: "textarea",
      name: "description",
      required: true,
      label: "Description",
      maxLength: 100,
    },
    {
      type: "upload",
      relationTo: "icons",
      name: "icon",
      label: "Icône",
      required: false,
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

export default Statistics;
