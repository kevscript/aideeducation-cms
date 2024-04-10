import { CollectionConfig } from "payload/types";
import { isEditor } from "../../access/isEditor";

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
        placeholder: "ex: Video d'introduction du site.",
      },
    },
  ],
};
