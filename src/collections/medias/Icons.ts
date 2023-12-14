import { CollectionConfig } from "payload/types";

export const Icons: CollectionConfig = {
  slug: "icons",
  upload: {
    staticDir: "media/icons",
    staticURL: "/media/icons",
    mimeTypes: ["image/svg+xml"],
  },
  labels: {
    singular: "Icône",
    plural: "Icônes",
  },
  admin: { group: "Medias" },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Description textuelle (ex: 'Icône de coeur')",
      required: true,
    },
  ],
};

export default Icons;
