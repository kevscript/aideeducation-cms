import { CollectionConfig } from "payload/types";

const News: CollectionConfig = {
  slug: "news",
  admin: { description: "Articles et communiqués de l'association." },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea" },
    { name: "content", type: "richText" },
    { name: "date", type: "date" },
    // news document
  ],
};

export default News;
