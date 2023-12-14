import { CollectionConfig } from "payload/types";
import { isAdminOrPublished } from "../access/isAdminOrPublished";
import { isAdminField } from "../access/isAdmin";

export const Partners: CollectionConfig = {
  slug: "partners",
  admin: {
    group: "Contenu",
    description: "Les partenaires de l'association",
    useAsTitle: "name",
    defaultColumns: ["name", "published", "updatedAt", "createdAt"],
  },
  labels: {
    singular: "Partenaire",
    plural: "Partenaires",
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
      unique: true,
    },
    { type: "textarea", name: "description", required: false, label: "Description" },
    {
      type: "upload",
      name: "logo",
      relationTo: "logos",
      required: false,
      label: "Logo",
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

export default Partners;
