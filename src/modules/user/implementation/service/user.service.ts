import {
  CreateUserDTO,
  UpdateUserDTO,
  UserDetailDTO,
  UserDTO,
} from '../dto/user.dto';

export abstract class AbstractUserService {
  abstract findById(payload: { id: string }): Promise<UserDetailDTO>;
  abstract findMany(): Promise<UserDTO[]>;
  abstract insert(payload: CreateUserDTO): Promise<string>;
  abstract update(
    identifier: { id: string },
    payload: UpdateUserDTO,
  ): Promise<string>;
  abstract delete(payload: { id: string }): Promise<string>;
}
