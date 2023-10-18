import { CollectionConfig } from "payload/types";

export const Reviews: CollectionConfig = {
  slug: "reviews",
  admin: { description: "Avis des utilisateurs." },
  labels: {
    singular: "Avis",
    plural: "Avis",
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "username",
          type: "text",
          required: true,
          label: "Pseudo",
          admin: { width: "80%" },
        },
        { name: "date", type: "date", label: "Date", admin: { width: "20%" } },
      ],
    },
    {
      name: "avatar",
      type: "upload",
      relationTo: "avatars",
      label: "Avatar de l'utilisateur",
    },
    {
      type: "row",
      fields: [
        { name: "title", type: "text", label: "Titre", admin: { width: "80%" } },
        {
          name: "rating",
          type: "number",
          min: 0,
          max: 5,
          label: "Note (sur 5)",
          admin: { width: "20%" },
          defaultValue: 5,
        },
      ],
    },
    { name: "comment", type: "textarea", label: "Commentaire" },
    {
      name: "visible",
      type: "checkbox",
      defaultValue: true,
      label: "Publier sur le site",
    },
  ],
};

export default Reviews;
