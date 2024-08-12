import { IsString, IsUUID } from 'class-validator';
import { IRole } from '../interface/role.interface';
import { AbstractDTO } from 'src/common/dto/abstract.dto';
import { Exclude, Expose } from 'class-transformer';

export class CreateRoleDTO implements Pick<IRole, 'desc'> {
  @IsString()
  code: string;

  @IsString()
  desc: string;
}

@Exclude()
export class RoleDTO extends AbstractDTO implements IRole {
  @Expose()
  id: string;

  @Expose()
  code: 'SUPERADMIN' | 'ADMIN' | 'USER';

  @Expose()
  desc: string;
}

@Exclude()
export class RolePrivateDTO extends AbstractDTO implements IRole {
  @Expose()
  id: string;

  @Expose()
  code: 'SUPERADMIN' | 'ADMIN' | 'USER';

  @Expose()
  desc: string;

  @Expose()
  createdAt: Date;

  @Expose()
  createdBy: string;
}

export class FindRoleParamDTO implements Pick<IRole, 'id'> {
  @IsUUID('4')
  id: string;
}

export class UpdateRoleDTO implements Pick<IRole, 'desc'> {
  @IsString()
  desc: string;
}
