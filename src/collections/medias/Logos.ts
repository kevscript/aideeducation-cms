import { CollectionConfig } from "payload/types";

export const Logos: CollectionConfig = {
  slug: "logos",
  upload: {
    staticDir: "media/logos",
    staticURL: "/media/logos",
    mimeTypes: ["image/*"],
    focalPoint: false,
    crop: false,
  },
  labels: {
    singular: "Logo",
    plural: "Logos",
  },
  admin: { group: "Medias" },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Description textuelle (ex. 'Logo de X')",
      required: true,
    },
  ],
};

export default Logos;
