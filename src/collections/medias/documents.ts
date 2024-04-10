import { CollectionConfig } from "payload/types";
import { isEditor } from "../../access/isEditor";

export const Documents: CollectionConfig = {
  slug: "documents",
  upload: {
    staticDir: "media/documents",
    staticURL: "/media/documents",
    mimeTypes: ["application/pdf", "image/*"],
    focalPoint: false,
    crop: false,
  },
  labels: {
    singular: "Document",
    plural: "Documents",
  },
  admin: { group: "Medias" },
  access: {
    read: () => true,
    update: isEditor,
    create: isEditor,
    delete: isEditor,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Description textuelle",
      required: true,
      admin: {
        placeholder: "ex: Compte rendu de la réunion du 10/05/23",
      },
    },
  ],
};

export default Documents;
