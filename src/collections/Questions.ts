import { CollectionConfig } from "payload/types";
import { isAdminOrPublished } from "../access/isAdminOrPublished";
import { isAdminField } from "../access/isAdmin";

export const Questions: CollectionConfig = {
  slug: "questions",
  admin: {
    group: "Contenu",
    description: "Foire aux questions, réponses aux questions récurrentes.",
    useAsTitle: "question",
    defaultColumns: ["question", "published", "updatedAt", "createdAt"],
  },
  defaultSort: "sort",
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
      type: "number",
      name: "order",
      label: "Ordre",
      required: true,
      defaultValue: 1,
      admin: { style: { width: "80px" } },
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

export default Questions;
