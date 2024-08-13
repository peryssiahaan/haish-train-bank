export interface IAbstractEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy: string;
  updatedBy: string;
  deletedBy: string;
}

export interface IAbstractService {
  findById(payload: { id: string }): Promise<unknown>;
  findMany(): Promise<unknown[]>;
  insert(payload: unknown): Promise<string>;
  update(identifier: { id: string }, payload: unknown): Promise<string>;
  delete(payload: { id: string }): Promise<string>;
}
