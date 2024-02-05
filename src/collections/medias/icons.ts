import { CollectionConfig } from "payload/types";

export const Icons: CollectionConfig = {
  slug: "icons",
  upload: {
    staticDir: "media/icons",
    staticURL: "/media/icons",
    mimeTypes: ["image/svg+xml"],
    focalPoint: false,
    crop: false,
  },
  labels: {
    singular: "Icône",
    plural: "Icônes",
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
        placeholder: "ex: Icone Discord",
      },
    },
  ],
};

export default Icons;
