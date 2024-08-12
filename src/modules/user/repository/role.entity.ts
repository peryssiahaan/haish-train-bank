import { ROLES, TROLES } from '../../../common/constant/object';
import { AbstractEntity } from '../../../common/entity/abstract.entity';
import { Column, Entity } from 'typeorm';
import { IRole } from '../implementation/interface/role.interface';

@Entity('roles')
export class RoleEntity extends AbstractEntity implements IRole {
  @Column({ type: 'enum', enum: ROLES, unique: true })
  code: TROLES;

  @Column({ type: 'varchar', nullable: true })
  desc: string;
}
