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
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Description",
      required: true,
    },
  ],
};

export default Avatars;
