import { CollectionConfig } from "payload/types";
import { isAdminOrPublished } from "../../access/isAdminOrPublished";
import { orderField } from "../../components/order/config";
import { publishedField } from "../../components/published/config";

export const Statistics: CollectionConfig = {
  slug: "statistics",
  admin: {
    group: "Contenu",
    description: "L'association à travers les chiffres.",
    useAsTitle: "title",
    defaultColumns: ["title", "description", "published", "order", "updatedAt"],
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
      name: "title",
      required: true,
      label: "Valeur",
      maxLength: 10,
      admin: {
        placeholder: "ex: 56, <24h, 4k+,...",
      },
    },
    {
      type: "text",
      name: "description",
      required: true,
      label: "Description (complète la stat)",
      maxLength: 50,
      admin: {
        placeholder: "ex: Bénévoles pour vous accompagner.",
      },
    },
    orderField,
    publishedField,
  ],
};
