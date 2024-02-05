export const CMS_ROLES = [
  { value: "admin", label: "Administrateur" },
  { value: "editor", label: "Editeur" },
] as const;

export type CmsRole = (typeof CMS_ROLES)[number];
