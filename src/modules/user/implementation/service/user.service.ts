import {
  CreateUserDTO,
  UpdateUserDTO,
  UserPrivateDTO,
  UserDTO,
} from '../dto/user.dto';

export abstract class AbstractUserService {
  abstract findById(payload: { id: string }): Promise<UserPrivateDTO>;
  abstract findMany(): Promise<UserDTO[]>;
  abstract insert(payload: CreateUserDTO): Promise<string>;
  abstract update(
    identifier: { id: string },
    payload: UpdateUserDTO,
  ): Promise<string>;
  abstract delete(payload: { id: string }): Promise<string>;
}
