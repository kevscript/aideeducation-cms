import { NumberField } from "payload/types";
import InputField from "./InputField";
import Cell from "./Cell";

export const validateOrderNumber = (value: number = 0): true | string => {
  return value >= 0 || `Please give a valide order number [0-n]`;
};

const orderField: NumberField = {
  name: "order",
  label: "Ordre d'affichage",
  type: "number",
  validate: validateOrderNumber,
  required: true,
  defaultValue: 0,
  admin: {
    components: {
      Field: InputField,
      Cell: Cell,
    },
  },
};

export default orderField;
