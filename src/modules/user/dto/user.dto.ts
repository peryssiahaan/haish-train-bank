import { IsString, IsUUID } from 'class-validator';
import { IUser } from '../interface/user.interface';
import { Exclude, Expose } from 'class-transformer';
import { AbstractDTO } from 'src/common/dto/abstract.dto';

export class CreateUserDTO implements Pick<IUser, 'username'> {
  @IsString()
  username: string;
}

@Exclude()
export class UserDTO extends AbstractDTO implements IUser {
  @Expose()
  id: string;

  @Expose()
  username: string;

  @Expose()
  createdBy: string;
}

export class FindUserParamDTO implements Pick<IUser, 'id'> {
  @IsUUID('4')
  id: string;
}
