import { CollectionConfig } from "payload/types";

const Faqs: CollectionConfig = {
  slug: "faqs",
  admin: { description: "Foire aux questions, réponses aux questions récurrentes." },
  fields: [
    { type: "text", name: "question", required: true },
    { type: "textarea", name: "answer", required: true },
    { type: "checkbox", name: "active", required: true, defaultValue: true },
  ],
};

export default Faqs;
