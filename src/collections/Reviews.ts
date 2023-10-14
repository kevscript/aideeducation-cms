import { CollectionConfig } from "payload/types";

const Reviews: CollectionConfig = {
  slug: "reviews",
  admin: { description: "Avis des utilisateurs." },
  fields: [
    { name: "username", type: "text", required: true },
    { name: "title", type: "text" },
    { name: "comment", type: "textarea" },
    { name: "active", type: "checkbox" },
    { name: "date", type: "date" },
    { name: "rating", type: "number", min: 0, max: 5 },
    // user avatar
  ],
};

export default Reviews;
