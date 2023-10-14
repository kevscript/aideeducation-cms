import { CollectionConfig } from "payload/types";

const Members: CollectionConfig = {
  slug: "members",
  admin: { description: "Liste des membres de l'association." },
  fields: [
    { name: "firstname", type: "text" },
    { name: "lastname", type: "text" },
    { name: "username", type: "text" },
    { name: "role", type: "text" },
    { name: "quote", type: "textarea" },
    { name: "joined", type: "date" },
    { name: "rank", type: "number", min: 0, max: 3 },
    { name: "status", type: "select", options: ["active", "retired"] },
    { name: "visible", type: "checkbox", defaultValue: true },
    // member avatar
  ],
};

export default Members;
