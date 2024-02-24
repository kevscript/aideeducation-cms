export const CMS_ROLES = {
  root: { value: "root", label: "Super Admin" } as const,
  admin: { value: "admin", label: "Administrateur" } as const,
  editor: { value: "editor", label: "Editeur" } as const,
  pending: { value: "pending", label: "En Attente" } as const,
} as const;

export type CmsRolesObjectKeys = keyof typeof CMS_ROLES;
export type CmsRolesObjectValues = (typeof CMS_ROLES)[CmsRolesObjectKeys];
