import { IAbstractService } from 'src/common/interface/abstract.interface';

export abstract class AbstractRoleService implements IAbstractService {
  abstract findById(payload: { id: string }): Promise<any>;
  abstract findMany(): Promise<any[]>;
  abstract insert(payload: any): Promise<string>;
  abstract update(identifier: { id: string }, payload: any): Promise<string>;
  abstract delete(payload: { id: string }): Promise<string>;
}
