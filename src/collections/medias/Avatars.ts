import { CollectionConfig } from "payload/types";

export const Avatars: CollectionConfig = {
  slug: "avatars",
  upload: {
    staticDir: "media/avatars",
    staticURL: "/media/avatars",
    mimeTypes: ["image/*"],
    imageSizes: [
      {
        name: "thumbnail",
        width: 300,
        height: 300,
        position: "centre",
      },
    ],
  },
  labels: {
    singular: "Avatar",
    plural: "Avatars",
  },
  admin: { group: "Medias" },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Description textuelle (ex: 'Avatar de Pierre Dupont')",
      required: true,
    },
  ],
};

export default Avatars;
