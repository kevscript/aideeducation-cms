import { CollectionConfig } from "payload/types";

export const News: CollectionConfig = {
  slug: "news",
  admin: {
    group: "Contenu",
    description: "Articles et communiqués de l'association.",
  },
  labels: {
    singular: "Communiqué",
    plural: "Communiqués",
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          label: "Titre",
          admin: { width: "80%" },
        },
        {
          name: "date",
          type: "date",
          required: true,
          label: "Date",
          admin: { width: "20%" },
        },
      ],
    },
    {
      name: "document",
      type: "upload",
      relationTo: "documents",
      label: "Document à partager",
      required: false,
    },
    { name: "content", type: "textarea", label: "Contenu", required: false },
  ],
};

export default News;
