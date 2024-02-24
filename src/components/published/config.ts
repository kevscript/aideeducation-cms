import { CheckboxField } from "payload/types";
import { isEditorField } from "../../access/isEditor";

export const publishedField: CheckboxField = {
  type: "checkbox",
  name: "published",
  required: true,
  defaultValue: true,
  label: "Publier l'élément",
  access: {
    read: isEditorField,
    create: isEditorField,
    update: isEditorField,
  },
  admin: {
    position: "sidebar",
  },
};
