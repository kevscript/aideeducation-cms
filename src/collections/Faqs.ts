import { CollectionConfig } from "payload/types";
import { isAdminOrPublished } from "../access/isAdminOrPublished";
import { isAdminField } from "../access/isAdmin";

export const Faqs: CollectionConfig = {
  slug: "faqs",
  admin: {
    group: "Contenu",
    description: "Foire aux questions, réponses aux questions récurrentes.",
    useAsTitle: "question",
    defaultColumns: ["question", "published", "updatedAt", "createdAt"],
  },
  labels: {
    singular: "Question (FAQ)",
    plural: "Questions (FAQ)",
  },
  access: {
    read: isAdminOrPublished,
  },
  fields: [
    {
      type: "text",
      name: "question",
      required: true,
      label: "Question",
      maxLength: 200,
      unique: true,
    },
    {
      type: "textarea",
      name: "answer",
      required: true,
      label: "Réponse",
      maxLength: 1000,
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

export default Faqs;
