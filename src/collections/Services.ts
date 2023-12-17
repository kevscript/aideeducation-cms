import { CollectionConfig } from "payload/types";
import { isAdminField } from "../access/isAdmin";
import { isAdminOrPublished } from "../access/isAdminOrPublished";

export const Services: CollectionConfig = {
  slug: "services",
  admin: {
    group: "Contenu",
    description: "Les services proposés par l'association.",
    useAsTitle: "title",
    defaultColumns: ["order", "title", "published", "updatedAt", "createdAt"],
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
      type: "row",
      fields: [
        {
          type: "text",
          name: "title",
          required: true,
          label: "Titre",
          admin: { width: "80%" },
        },
        {
          type: "number",
          name: "order",
          label: "Ordre",
          required: true,
          defaultValue: 1,
          admin: { width: "20%", style: { minWidth: "80px" } },
        },
      ],
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
      name: "illustration",
      relationTo: "illustrations",
      label: "Illustration du service",
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

export default Services;
