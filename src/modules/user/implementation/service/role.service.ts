import { IAbstractService } from 'src/common/interface/abstract.interface';
import {
  CreateRoleDTO,
  RoleDTO,
  RolePrivateDTO,
  UpdateRoleDTO,
} from '../dto/role.dto';

export abstract class AbstractRoleService implements IAbstractService {
  abstract findById(payload: { id: string }): Promise<RolePrivateDTO>;
  abstract findMany(): Promise<RoleDTO[]>;
  abstract insert(payload: CreateRoleDTO): Promise<string>;
  abstract update(
    identifier: { id: string },
    payload: UpdateRoleDTO,
  ): Promise<string>;
  abstract delete(payload: { id: string }): Promise<string>;
}
