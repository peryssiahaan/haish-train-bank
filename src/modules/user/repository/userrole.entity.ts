import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { RoleEntity } from './role.entity';
import { IUserRole } from '../implementation/interface/userrole.interface';

@Entity('userroles')
export class UserRoleEntity implements IUserRole {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => UserEntity, { eager: true })
  @JoinColumn()
  user: UserEntity;

  @ManyToOne(() => RoleEntity, { nullable: false, eager: true })
  @JoinColumn()
  role: RoleEntity;
}
