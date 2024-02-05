import { CheckboxField } from "payload/types";
import { isAdminField } from "../../access/isAdmin";

export const publishedField: CheckboxField = {
  type: "checkbox",
  name: "published",
  required: true,
  defaultValue: true,
  label: "Publier l'élément",
  access: {
    read: isAdminField,
    create: isAdminField,
    update: isAdminField,
  },
  admin: {
    position: "sidebar",
  },
};
