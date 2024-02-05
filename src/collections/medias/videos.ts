import { CollectionConfig } from "payload/types";

export const Videos: CollectionConfig = {
  slug: "videos",
  upload: {
    staticDir: "media/videos",
    staticURL: "/media/videos",
    mimeTypes: ["video/*"],
    focalPoint: false,
    crop: false,
  },
  labels: {
    singular: "Video",
    plural: "Videos",
  },
  admin: {
    group: "Medias",
  },
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
        placeholder: "ex: Video d'introduction du site.",
      },
    },
  ],
};
