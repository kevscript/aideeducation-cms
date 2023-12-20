import { CollectionConfig } from "payload/types";
import { isAdminField } from "../../access/isAdmin";
import validateMember from "./validation/validateMember";
import orderField from "../../components/OrderField/config";
import { isAdminOrPublished } from "../../access/isAdminOrPublished";

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
        },
        {
          name: "lastname",
          type: "text",
          required: true,
          label: "Nom",
        },
      ],
    },
    {
      name: "avatar",
      type: "upload",
      relationTo: "avatars",
      label: "Avatar du membre",
    },
    {
      name: "role",
      type: "text",
      required: true,
      label: "Rôle principal",
      maxLength: 60,
    },
    {
      type: "row",
      fields: [
        {
          name: "status",
          type: "select",
          options: [
            { value: "active", label: "Membre actif" },
            { value: "retired", label: "Ancien membre" },
          ],
          hasMany: false,
          defaultValue: "active",
          label: "Statut",
          required: true,
        },
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
        orderField,
      ],
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

export default Members;
