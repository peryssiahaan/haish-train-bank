import { IsEmail, IsOptional, IsString, IsUUID } from 'class-validator';
import { IUser } from '../interface/user.interface';
import { Exclude, Expose } from 'class-transformer';
import { AbstractDTO } from 'src/common/dto/abstract.dto';

export class CreateUserDTO implements Omit<IUser, 'id'> {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  firstName: string;

  @IsString()
  @IsOptional()
  familyName?: string | null;
}

@Exclude()
export class UserDTO extends AbstractDTO implements IUser {
  @Expose()
  id: string;

  @Expose()
  username: string;

  @Expose()
  createdBy: string;

  @Expose()
  firstName: string;

  @Expose()
  familyName?: string | null;

  email: string;
}

@Exclude()
export class UserPrivateDTO extends AbstractDTO implements IUser {
  @Expose()
  id: string;

  @Expose()
  username: string;

  @Expose()
  email: string;

  @Expose()
  firstName: string;

  @Expose()
  familyName?: string | null | undefined;

  @Expose()
  createdAt: Date;

  @Expose()
  createdBy: string;
}

export class FindUserParamDTO implements Pick<IUser, 'id'> {
  @IsUUID('4')
  id: string;
}

export class UpdateUserDTO implements Pick<IUser, 'email'> {
  @IsEmail()
  email: string;
}
