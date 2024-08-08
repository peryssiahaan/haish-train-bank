import { IAbstractEntity } from '../interface/abstract.interface';

export abstract class AbstractDTO implements IAbstractEntity {
  id: string;

  createdAt: Date;
  createdBy: string;

  updatedAt: Date;
  updatedBy: string;

  deletedAt: Date;
  deletedBy: string;
}
