import { CollectionConfig } from "payload/types";

export const Faqs: CollectionConfig = {
  slug: "faqs",
  admin: { description: "Foire aux questions, réponses aux questions récurrentes." },
  labels: {
    singular: "Question (FAQ)",
    plural: "Questions (FAQ)",
  },
  fields: [
    { type: "text", name: "question", required: true, label: "Question" },
    { type: "textarea", name: "answer", required: true, label: "Réponse" },
    {
      type: "checkbox",
      name: "active",
      required: true,
      defaultValue: true,
      label: "Publier sur le site",
    },
  ],
};

export default Faqs;
