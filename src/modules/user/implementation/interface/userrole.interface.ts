import { IRole } from './role.interface';
import { IUser } from './user.interface';

export interface IUserRole {
  id: string;
  user: IUser;
  role: IRole;
}
