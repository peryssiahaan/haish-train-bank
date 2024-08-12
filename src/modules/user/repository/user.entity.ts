import { Column, Entity } from 'typeorm';
import { IUser } from '../implementation/interface/user.interface';
import { AbstractEntity } from '../../../common/entity/abstract.entity';

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity implements IUser {
  @Column({ type: 'varchar', unique: true })
  username: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar' })
  firstName: string;

  @Column({ type: 'varchar', nullable: true })
  familyName: string | null;
}
