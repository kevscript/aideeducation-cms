import { CollectionConfig } from "payload/types";
import { isAdminField } from "../access/isAdmin";
import { isAdminOrPublished } from "../access/isAdminOrPublished";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  admin: {
    group: "Contenu",
    description: "Témoignages des utilisateurs.",
    useAsTitle: "username",
    defaultColumns: ["username", "rating", "published", "updatedAt", "createdAt"],
  },
  labels: {
    singular: "Témoignage",
    plural: "Témoignages",
  },
  access: {
    read: isAdminOrPublished,
  },
  fields: [
    {
      name: "avatar",
      type: "upload",
      relationTo: "avatars",
      label: "Avatar de l'utilisateur",
      required: false,
    },
    {
      type: "row",
      fields: [
        {
          name: "username",
          type: "text",
          required: true,
          label: "Nom de l'utilisateur",
          admin: { width: "60%" },
          maxLength: 40,
        },
        {
          name: "rating",
          type: "number",
          min: 0,
          max: 5,
          label: "Note (sur 5)",
          admin: { width: "20%" },
          defaultValue: 5,
          required: true,
        },
        { name: "date", type: "date", label: "Date", admin: { width: "20%" } },
      ],
    },
    {
      name: "comment",
      type: "textarea",
      label: "Commentaire",
      required: true,
      maxLength: 500,
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

export default Testimonials;
