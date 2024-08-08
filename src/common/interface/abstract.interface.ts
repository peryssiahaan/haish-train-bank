export interface IAbstractEntity {
  id: string;

  createdAt: Date;

  updatedAt: Date;

  deletedAt: Date;

  createdBy: string;

  updatedBy: string;

  deletedBy: string;
}
