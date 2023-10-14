import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    { type: "text", name: "firstname" },
    { type: "text", name: "lastname" },
  ],
};

export default Users;
