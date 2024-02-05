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
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Description textuelle",
      required: true,
      admin: {
        placeholder: "ex: Logo de ...",
      },
    },
  ],
};
