import { IsString, IsUUID } from 'class-validator';
import { IUserRole } from '../interface/userrole.interface';
import { IRole } from '../interface/role.interface';
import { IUser } from '../interface/user.interface';
import { Exclude, Expose } from 'class-transformer';

export class CreateUserRoleDTO {
  @IsUUID()
  userId: string;

  @IsUUID()
  roleId: string;
}

@Exclude()
export class UserRoleDTO implements IUserRole {
  @Expose()
  id: string;

  @Expose()
  role: IRole;

  @Expose()
  user: IUser;
}

export class FindUserRoleParamDTO implements Pick<IUserRole, 'id'> {
  @IsUUID('4')
  id: string;
}

export class UpdateUserRoleDTO {
  @IsUUID()
  roleId: string;
}
