import { NumberField } from "payload/types";
import { OrderField } from "./field";
import { OrderCell } from "./cell";

export const validateOrderNumber = (value: number = 0): true | string => {
  return value >= 0 || `${value} est invalide. L'ordre ne doit pas être moins de 0.`;
};

export const orderField: NumberField = {
  name: "order",
  label: "Ordre d'affichage",
  type: "number",
  validate: validateOrderNumber,
  required: true,
  defaultValue: 0,
  admin: {
    components: {
      Field: OrderField,
      Cell: OrderCell,
    },
    position: "sidebar",
  },
};
