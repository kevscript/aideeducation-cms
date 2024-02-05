import { CollectionConfig } from "payload/types";
import { isAdminOrPublished } from "../../access/isAdminOrPublished";
import { orderField } from "../../components/order/config";
import { publishedField } from "../../components/published/config";

export const Orientations: CollectionConfig = {
  slug: "orientations",
  admin: {
    group: "Contenu",
    description: "Les sources d'aide à l'orientation proposées par l'association.",
    useAsTitle: "name",
    defaultColumns: ["name", "order", "published", "updatedAt", "createdAt"],
  },
  defaultSort: "order",
  labels: {
    singular: "Orientation",
    plural: "Orientations",
  },
  access: {
    read: isAdminOrPublished,
  },
  fields: [
    {
      type: "text",
      name: "name",
      required: true,
      label: "Nom",
      maxLength: 50,
      admin: {
        placeholder: "ex: Studyrama, Parcoursup,...",
      },
    },
    {
      type: "textarea",
      name: "description",
      required: false,
      label: "Description",
      maxLength: 1000,
      admin: {
        placeholder: "Expliquer l'activité de l'organisme en question.",
      },
    },
    {
      type: "array",
      name: "links",
      label: "Liens",
      required: false,
      maxRows: 5,
      fields: [
        {
          type: "text",
          name: "label",
          label: "Label du lien",
          required: true,
          admin: {
            placeholder: "ex: Site Internet",
          },
          maxLength: 50,
        },
        {
          type: "text",
          name: "link",
          label: "Lien",
          required: true,
          admin: {
            placeholder: "ex: https://aideeducation.fr",
          },
          maxLength: 500,
        },
        orderField,
      ],
    },
    {
      type: "upload",
      name: "logo",
      relationTo: "logos",
      required: false,
      label: "Logo",
    },
    orderField,
    publishedField,
  ],
};
