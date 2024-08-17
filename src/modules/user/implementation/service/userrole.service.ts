import { IAbstractService } from 'src/common/interface/abstract.interface';
import {
  CreateUserRoleDTO,
  UpdateUserRoleDTO,
  UserRoleDTO,
} from '../dto/userrole.dto';

export abstract class IUserRoleService implements IAbstractService {
  abstract findById(payload: { id: string }): Promise<UserRoleDTO>;
  abstract findMany(): Promise<UserRoleDTO[]>;
  abstract insert(payload: CreateUserRoleDTO): Promise<string>;
  abstract update(
    identifier: { id: string },
    payload: UpdateUserRoleDTO,
  ): Promise<string>;
  abstract delete(payload: { id: string }): Promise<string>;
}
