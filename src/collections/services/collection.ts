import { CollectionConfig } from "payload/types";
import { isAdminOrPublished } from "../../access/isAdminOrPublished";
import { orderField } from "../../components/order/config";
import { publishedField } from "../../components/published/config";

export const Services: CollectionConfig = {
  slug: "services",
  admin: {
    group: "Contenu",
    description: "Les services proposés par l'association.",
    useAsTitle: "title",
    defaultColumns: ["title", "order", "published", "updatedAt", "createdAt"],
  },
  defaultSort: "order",
  labels: {
    singular: "Service",
    plural: "Services",
  },
  access: {
    read: isAdminOrPublished,
  },
  fields: [
    {
      type: "text",
      name: "title",
      required: true,
      label: "Titre",
      maxLength: 30,
      admin: {
        placeholder: "ex: Espace de travail,...",
      },
    },
    {
      type: "textarea",
      name: "description",
      required: true,
      label: "Description",
      maxLength: 150,
    },
    orderField,
    publishedField,
  ],
};
