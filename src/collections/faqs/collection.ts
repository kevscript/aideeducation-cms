import { CollectionConfig } from "payload/types";
import { orderField } from "../../components/order/config";
import { publishedField } from "../../components/published/config";
import { isEditorOrPublished } from "../../access/isEditorOrPublished";
import { isEditor } from "../../access/isEditor";

export const Faqs: CollectionConfig = {
  slug: "faqs",
  admin: {
    group: "Acceuil",
    description: "Foire aux questions, réponses aux questions récurrentes.",
    useAsTitle: "question",
    defaultColumns: ["question", "published", "order", "updatedAt"],
  },
  defaultSort: "order",
  labels: {
    singular: "Question (FAQ)",
    plural: "Questions (FAQ)",
  },
  access: {
    read: isEditorOrPublished,
    create: isEditor,
    delete: isEditor,
    update: isEditor,
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
    orderField,
    publishedField,
  ],
};
