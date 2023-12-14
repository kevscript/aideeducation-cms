import { CollectionConfig } from "payload/types";
import { isAdminField } from "../access/isAdmin";
import { isAdminOrPublished } from "../access/isAdminOrPublished";

export const Values: CollectionConfig = {
  slug: "values",
  admin: {
    group: "Contenu",
    description: "Liste des valeurs de l'association",
    useAsTitle: "title",
    defaultColumns: ["title", "published", "updatedAt", "createdAt"],
  },
  labels: {
    singular: "Valeur",
    plural: "Valeurs",
  },
  access: {
    read: isAdminOrPublished,
  },
  fields: [
    { type: "text", name: "title", label: "Valeur", required: true, maxLength: 20 },
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
      label: "Icône représentative",
    },
    {
      type: "checkbox",
      name: "published",
      required: true,
      defaultValue: true,
      label: "Publier",
      access: {
        read: isAdminField,
        create: isAdminField,
        update: isAdminField,
      },
    },
  ],
};

export default Values;
