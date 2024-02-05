import { CollectionConfig } from "payload/types";

export const Avatars: CollectionConfig = {
  slug: "avatars",
  upload: {
    staticDir: "media/avatars",
    staticURL: "/media/avatars",
    mimeTypes: ["image/*"],
    focalPoint: false,
    crop: false,
  },
  labels: {
    singular: "Avatar",
    plural: "Avatars",
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
        placeholder: "ex: Avatar de Pierre Dupont",
      },
    },
  ],
};
