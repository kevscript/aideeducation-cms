import { CollectionConfig } from "payload/types";
import { orderField } from "../../components/order/config";
import { publishedField } from "../../components/published/config";
import { isEditorOrPublished } from "../../access/isEditorOrPublished";
import { isEditor } from "../../access/isEditor";

export const TeamValues: CollectionConfig = {
  slug: "team-values",
  admin: {
    group: "Acceuil",
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
    read: isEditorOrPublished,
    create: isEditor,
    update: isEditor,
    delete: isEditor,
  },
  fields: [
    {
      type: "text",
      name: "title",
      label: "Valeur",
      required: true,
      maxLength: 50,
      admin: {
        placeholder: "ex: Audace, Curiosité, ...",
      },
    },
    {
      type: "textarea",
      name: "description",
      label: "Description",
      required: true,
      maxLength: 300,
    },
    {
      type: "upload",
      name: "icon",
      relationTo: "icons",
      label: "Icône SVG (couleur unie)",
      required: false,
    },
    orderField,
    publishedField,
  ],
};
