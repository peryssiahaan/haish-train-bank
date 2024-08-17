export const ROLES = {
  SUPERADMIN: 'SUPERADMIN',
  ADMIN: 'ADMIN',
  USER: 'USER',
} as const;

export type TROLES = keyof typeof ROLES;

export const DIFFICULTIES = {
  NORMAL: 'NORMAL',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCE: 'ADVANCE',
};

export type TDIFFICULTIES = keyof typeof DIFFICULTIES;
