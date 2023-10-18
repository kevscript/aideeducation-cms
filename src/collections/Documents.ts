import { CollectionConfig } from "payload/types";

export const Documents: CollectionConfig = {
  slug: "documents",
  upload: {
    staticDir: "media/documents",
    staticURL: "/media/documents",
    mimeTypes: ["application/pdf", "image/*"],
  },
  labels: {
    singular: "Document",
    plural: "Documents",
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Description",
      required: true,
    },
  ],
};

export default Documents;
