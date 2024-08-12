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
  findById<T>(payload: { id: string }): Promise<T>;
  findMany<T>(): Promise<T[]>;
  insert<T>(payload: T): Promise<string>;
  update<T>(identifier: { id: string }, payload: T): Promise<string>;
  delete<T>(payload: { id: string }): Promise<string>;
}
