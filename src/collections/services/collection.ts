import { CollectionConfig } from "payload/types";
import { orderField } from "../../components/order/config";
import { publishedField } from "../../components/published/config";
import { isEditorOrPublished } from "../../access/isEditorOrPublished";
import { isEditor } from "../../access/isEditor";

export const Services: CollectionConfig = {
  slug: "services",
  admin: {
    group: "Acceuil",
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
    read: isEditorOrPublished,
    update: isEditor,
    create: isEditor,
    delete: isEditor,
  },
  fields: [
    {
      type: "text",
      name: "title",
      required: true,
      label: "Titre",
      maxLength: 150,
      admin: {
        placeholder: "ex: Espace de travail,...",
      },
    },
    {
      type: "textarea",
      name: "description",
      required: true,
      label: "Description",
      maxLength: 500,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "images",
      label: "Image",
      required: true,
    },
    orderField,
    publishedField,
  ],
};
