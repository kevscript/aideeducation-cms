import { CollectionConfig } from "payload/types";
import { isAdminOrPublished } from "../../access/isAdminOrPublished";
import { orderField } from "../../components/order/config";
import { publishedField } from "../../components/published/config";

export const TeamValues: CollectionConfig = {
  slug: "team-values",
  admin: {
    group: "Contenu",
    description: "Liste des valeurs de l'association",
    useAsTitle: "title",
    defaultColumns: ["title", "order", "published", "updatedAt", "createdAt"],
  },
  defaultSort: "order",
  labels: {
    singular: "Valeur",
    plural: "Valeurs",
  },
  access: {
    read: isAdminOrPublished,
  },
  fields: [
    {
      type: "text",
      name: "title",
      label: "Valeur",
      required: true,
      maxLength: 20,
      admin: {
        placeholder: "ex: Audace, Curiosité, ...",
      },
    },
    {
      type: "textarea",
      name: "description",
      label: "Description",
      required: true,
      maxLength: 200,
    },
    {
      type: "upload",
      name: "icon",
      relationTo: "icons",
      label: "Icône (SVG - 24x24)",
      required: false,
    },
    orderField,
    publishedField,
  ],
};
