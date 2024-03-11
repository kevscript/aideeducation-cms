import { GlobalConfig } from "payload/types";
import { publishedField } from "../../components/published/config";
import { isEditor } from "../../access/isEditor";

export const Association: GlobalConfig = {
  slug: "association",
  admin: {
    group: "Qui sommes-nous",
  },
  access: {
    read: () => true,
    update: isEditor,
  },
  label: "Association",
  fields: [
    {
      type: "textarea",
      name: "presentation",
      label: "Présentation",
      required: true,
    },
    {
      name: "events",
      admin: {
        description: "Liste des évenements de la frise chronologique.",
      },
      labels: {
        singular: "Evenement (Frise)",
        plural: "Evenements (Frise)",
      },
      type: "array",
      fields: [
        {
          type: "text",
          name: "title",
          required: true,
          label: "Titre",
          maxLength: 200,
        },
        {
          type: "date",
          name: "date",
          required: true,
          label: "Date",
          admin: {
            date: {
              displayFormat: "dd/LL/yyyy",
              pickerAppearance: "dayOnly",
              maxDate: new Date(Date.now()),
            },
          },
          defaultValue: () => new Date(Date.now()),
        },
        publishedField,
      ],
    },
  ],
};
