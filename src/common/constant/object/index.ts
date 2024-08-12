export const ROLES = {
  SUPERADMIN: 0,
  ADMIN: 1,
  USER: 2,
} as const;

export type TROLES = keyof typeof ROLES;
