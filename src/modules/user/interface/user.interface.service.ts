import { CreateUserDTO, UserDTO } from '../dto/user.dto';

export abstract class AbstractUserService {
  abstract findById(payload: { id: string }): Promise<UserDTO | null>;
  abstract findMany(): Promise<UserDTO[]>;
  abstract insert(payload: CreateUserDTO): Promise<string>;
  abstract delete(payload: { id: string }): Promise<string>;
}
