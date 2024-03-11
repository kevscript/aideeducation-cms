import { GlobalConfig } from "payload/types";
import { isEditor } from "../../access/isEditor";

export const Dons: GlobalConfig = {
  slug: "dons",
  admin: {
    group: "Nous soutenir",
  },
  access: {
    read: () => true,
    update: isEditor,
  },
  label: "Dons",
  fields: [
    {
      type: "textarea",
      name: "description",
      label: "Description",
      required: true,
    },
    {
      type: "text",
      name: "helloAssoUrl",
      label: "Lien HelloAsso",
    },
  ],
};
