import { CollectionConfig } from "payload/types";
import { isEditor } from "../../access/isEditor";

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
        placeholder: "ex: Icone Discord",
      },
    },
  ],
};

export default Icons;
