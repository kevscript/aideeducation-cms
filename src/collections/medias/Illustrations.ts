import { CollectionConfig } from "payload/types";

export const Illustrations: CollectionConfig = {
  slug: "illustrations",
  upload: {
    staticDir: "media/illustrations",
    staticURL: "/media/illustrations",
    mimeTypes: ["image/*"],
    focalPoint: false,
    crop: false,
  },
  labels: {
    singular: "Illustration",
    plural: "Illustrations",
  },
  admin: { group: "Medias" },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Description textuelle (ex: '3 Personnes qui travaillent')",
      required: true,
      validate: (value) => {
        if (value === "no") {
          console.log("noooo");
          return "this is no";
        }
        return true;
      },
    },
    // {
    //   name: "filesize",
    //   label: "File Size",
    //   type: "number",
    //   admin: {
    //     readOnly: true,
    //     hidden: false,
    //     condition: (data) => {
    //       console.log("dattaaa", data);
    //       return data.file;
    //     },
    //   },
    //   validate: (value) => {
    //     if (value > 1000000) {
    //       console.log("tooo big");
    //       return `File to big. File size limit : 10`;
    //     }
    //     return true;
    //   },
    // },
  ],
};

export default Illustrations;
