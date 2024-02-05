export const ASSOCIATION_DEPARTMENTS = [
  { label: "Dir. Générale", value: "direction-generale" },
  { label: "Dépt. Intérieur", value: "departement-interieur" },
  { label: "Dépt. Extérieur", value: "departement-exterieur" },
  { label: "Dépt. Pédagogique", value: "departement-pedagogique" },
] as const;

export type AssociationDepartment = (typeof ASSOCIATION_DEPARTMENTS)[number];
