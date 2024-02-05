import { CollectionConfig } from "payload/types";
import { isAdminOrPublished } from "../../access/isAdminOrPublished";
import TextareaWithCountField from "../../components/TextareaWithCountField";
import { orderField } from "../../components/order/config";
import { publishedField } from "../../components/published/config";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  admin: {
    group: "Contenu",
    description: "Témoignages des utilisateurs.",
    useAsTitle: "username",
    defaultColumns: ["username", "rating", "published", "order", "updatedAt"],
  },
  defaultSort: "order",
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
          name: "date",
          type: "date",
          required: true,
          label: "Rédigé le",
          admin: {
            date: {
              displayFormat: "dd/LL/yyyy",
              pickerAppearance: "dayOnly",
              maxDate: new Date(Date.now()),
            },
            width: "30%",
          },
          defaultValue: () => new Date(Date.now()),
        },
      ],
    },
    {
      name: "comment",
      type: "textarea",
      label: "Commentaire",
      required: true,
      maxLength: 500,
      admin: {
        components: {
          Field: TextareaWithCountField,
        },
      },
    },
    {
      name: "avatar",
      type: "upload",
      relationTo: "avatars",
      label: "Avatar de l'utilisateur",
      required: false,
    },
    orderField,
    publishedField,
  ],
};
