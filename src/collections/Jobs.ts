import { CollectionConfig } from "payload/types";

const Jobs: CollectionConfig = {
  slug: "jobs",
  admin: { description: "Postes à pourvoir au sein de l'association." },
  fields: [
    { name: "role", type: "text", required: true },
    { name: "description", type: "textarea" },
    { name: "active", type: "checkbox", required: true, defaultValue: true },
    // job image
  ],
};

export default Jobs;
