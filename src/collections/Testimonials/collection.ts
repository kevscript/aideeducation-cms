import { CollectionConfig } from "payload/types";
import { isAdminField } from "../../access/isAdmin";
import { isAdminOrPublished } from "../../access/isAdminOrPublished";
import orderField from "../../components/OrderField/config";
import TextareaWithCountField from "../../components/TextareaWithCountField";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  admin: {
    group: "Contenu",
    description: "Témoignages des utilisateurs.",
    useAsTitle: "username",
    defaultColumns: ["username", "rating", "published", "order", "updatedAt"],
  },
  defaultSort: "sort",
  labels: {
    singular: "Témoignage",
    plural: "Témoignages",
  },
  access: {
    read: isAdminOrPublished,
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "username",
          type: "text",
          required: true,
          label: "Nom de l'utilisateur",
          admin: { width: "50%" },
          maxLength: 40,
        },
        {
          name: "rating",
          type: "number",
          min: 0,
          max: 5,
          label: "Note [0-5]",
          admin: { width: "20%" },
          defaultValue: 5,
          required: true,
        },
        {
          name: "date",
          type: "date",
          required: true,
          admin: {
            date: {
              displayFormat: "dd/LL/yyyy",
              pickerAppearance: "dayOnly",
              maxDate: new Date(Date.now()),
            },
            width: "30%",
          },
          defaultValue: () => new Date(Date.now()),
          label: "Rédigé le",
        },
      ],
    },
    {
      name: "avatar",
      type: "upload",
      relationTo: "avatars",
      label: "Avatar de l'utilisateur",
      required: false,
    },
    {
      name: "comment",
      type: "textarea",
      label: "Commentaire",
      required: true,
      maxLength: 200,
      admin: {
        components: {
          Field: TextareaWithCountField,
        },
      },
    },
    orderField,
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

export default Testimonials;
