import { CollectionConfig } from "payload/types";
import { isAdminField } from "../access/isAdmin";
// import MemberThumbnail from "../components/members/MemberThumbnail";

export const Members: CollectionConfig = {
  slug: "members",
  admin: {
    group: "Contenu",
    description: "Liste des membres de l'association.",
    useAsTitle: "fullname",
    disableDuplicate: true,
    defaultColumns: ["full_name", "role", "rank", "joined", "status", "visible"],
  },
  labels: {
    singular: "Membre",
    plural: "Membres",
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "first_name",
          type: "text",
          required: true,
          label: "Prénom",
          admin: { width: "30%" },
        },
        {
          name: "last_name",
          type: "text",
          required: true,
          label: "Nom",
          admin: { width: "40%" },
        },
        {
          name: "user_name",
          type: "text",
          unique: true,
          required: true,
          label: "Pseudo",
          admin: { width: "30%" },
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
      name: "roles",
      type: "select",
      required: true,
      hasMany: true,
      options: [{ value: "developer", label: "Développeur" }],
      label: "Rôles au sein de l'association",
    },
    {
      type: "row",
      fields: [
        {
          name: "status",
          type: "select",
          options: [
            { value: "active", label: "Actif" },
            { value: "retired", label: "Retraité" },
          ],
          hasMany: false,
          defaultValue: "active",
          admin: {
            width: "35%",
          },
          label: "Statut",
          required: true,
        },
        {
          name: "joined",
          type: "date",
          required: true,
          admin: {
            date: { displayFormat: "dd/LL/yyyy", pickerAppearance: "dayOnly" },
            width: "35%",
          },
          label: "Date d'arrivée",
        },
        {
          name: "rank",
          type: "number",
          min: 0,
          max: 3,
          required: true,
          defaultValue: 0,
          admin: { width: "30%" },
          label: "Niveau de distinction",
        },
      ],
    },
    { name: "quote", type: "textarea", label: "Citation" },
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
      name: "full_name",
      type: "text",
      unique: true,
      admin: { hidden: true },
      label: "Nom",
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            delete siblingData["full_name"];
          },
        ],
        afterRead: [
          ({ data }) => {
            return `${data.first_name} ${data.last_name}`;
          },
        ],
      },
    },
  ],
};

export default Members;
