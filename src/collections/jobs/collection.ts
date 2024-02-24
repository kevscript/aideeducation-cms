import { CollectionConfig } from "payload/types";
import { orderField } from "../../components/order/config";
import { publishedField } from "../../components/published/config";
import { isEditor } from "../../access/isEditor";
import { isEditorOrPublished } from "../../access/isEditorOrPublished";

export const Jobs: CollectionConfig = {
  slug: "jobs",
  admin: {
    group: "Contenu",
    description: "Postes à pourvoir au sein de l'association.",
    useAsTitle: "role",
    defaultColumns: ["role", "status", "order", "published"],
  },
  defaultSort: "order",
  labels: {
    singular: "Recrutement",
    plural: "Recrutements",
  },
  access: {
    read: isEditorOrPublished,
    create: isEditor,
    update: isEditor,
    delete: isEditor,
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "role",
          type: "text",
          required: true,
          label: "Rôle",
          admin: { width: "80%", placeholder: "ex: Développeur Web" },
          unique: true,
        },
        {
          name: "status",
          type: "select",
          required: true,
          label: "Statut de recrutement",
          hasMany: false,
          options: [
            { value: "active", label: "Actif" },
            { value: "inactive", label: "Inactif" },
          ],
          defaultValue: "active",
          admin: { width: "20%" },
        },
      ],
    },
    {
      name: "description",
      type: "textarea",
      label: "Description du rôle",
      required: true,
      maxLength: 300,
    },
    {
      name: "icon",
      type: "upload",
      relationTo: "icons",
      label: "Icône",
      required: false,
    },
    orderField,
    publishedField,
  ],
};
