import { CollectionConfig } from "payload/types";
import { isEditor } from "../../access/isEditor";

export const Images: CollectionConfig = {
  slug: "images",
  upload: {
    staticDir: "media/images",
    staticURL: "/media/images",
    mimeTypes: ["image/*"],
    focalPoint: false,
    crop: false,
  },
  labels: {
    singular: "Image",
    plural: "Images",
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
        placeholder: "ex: un poisson rouge",
      },
    },
  ],
};
