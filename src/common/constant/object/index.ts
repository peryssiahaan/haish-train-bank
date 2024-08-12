export const ROLES = {
  SUPERADMIN: 'SUPERADMIN',
  ADMIN: 'ADMIN',
  USER: 'USER',
} as const;

export type TROLES = keyof typeof ROLES;
