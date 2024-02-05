import { CollectionConfig } from "payload/types";
import { validateMember } from "./validate-member";
import { isAdminOrPublished } from "../../access/isAdminOrPublished";
import { orderField } from "../../components/order/config";
import { publishedField } from "../../components/published/config";
import { ASSOCIATION_DEPARTMENTS } from "../../constants/departments";

export const Members: CollectionConfig = {
  slug: "members",
  admin: {
    group: "Contenu",
    description: "Liste des membres de l'association.",
    useAsTitle: "fullname",
    disableDuplicate: true,
    defaultColumns: ["fullname", "role", "order", "published", "updatedAt"],
  },
  access: {
    read: isAdminOrPublished,
  },
  hooks: {
    beforeValidate: [validateMember],
  },
  defaultSort: "order",
  labels: {
    singular: "Membre",
    plural: "Membres",
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "firstname",
          type: "text",
          required: true,
          label: "Prénom",
          maxLength: 30,
        },
        {
          name: "lastname",
          type: "text",
          required: true,
          label: "Nom",
          maxLength: 30,
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "department",
          type: "select",
          hasMany: false,
          options: [...ASSOCIATION_DEPARTMENTS],
          label: "Département Principal",
          required: true,
        },
        {
          name: "role",
          type: "text",
          required: true,
          label: "Rôle principal",
          maxLength: 50,
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "joinedAt",
          type: "date",
          required: true,
          admin: {
            date: {
              displayFormat: "dd/LL/yyyy",
              pickerAppearance: "dayOnly",
              maxDate: new Date(Date.now()),
            },
          },
          defaultValue: () => new Date(Date.now()),
          label: "Arrivé(e) le",
        },
        {
          name: "rank",
          type: "select",
          hasMany: false,
          options: [
            { value: "0", label: "[0] - Aucune étoile" },
            { value: "1", label: "[1] - Une étoile" },
            { value: "2", label: "[2] - Deux étoiles" },
            { value: "3", label: "[3] - Trois étoiles" },
          ],
          required: true,
          defaultValue: "0",
          label: "Niveau de distinction",
        },
      ],
    },
    {
      name: "avatar",
      type: "upload",
      relationTo: "avatars",
      label: "Avatar du membre",
      required: false,
    },
    orderField,
    publishedField,
    {
      name: "fullname",
      type: "text",
      admin: { hidden: true },
      label: "Nom Complet",
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            delete siblingData["fullname"];
          },
        ],
        afterRead: [
          ({ data }) => {
            return `${data.firstname} ${data.lastname}`;
          },
        ],
      },
    },
  ],
};
