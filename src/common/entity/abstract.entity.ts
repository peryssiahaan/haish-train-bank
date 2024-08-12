import {
  BeforeSoftRemove,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IAbstractEntity } from '../interface/abstract.interface';
import { SYSTEM } from '../constant';

export class AbstractEntity implements IAbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @Column({ type: 'varchar', default: SYSTEM })
  createdBy: string;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @Column({ type: 'varchar', nullable: true })
  updatedBy: string;

  @DeleteDateColumn({ type: 'timestamptz' })
  deletedAt: Date;

  @Column({ type: 'varchar', nullable: true })
  deletedBy: string;

  @BeforeSoftRemove()
  updatedDeletedBy() {
    if (this.deletedAt && !this.deletedBy) {
      this.deletedBy = SYSTEM;
    }
  }

  @BeforeUpdate()
  updateUpdateBy() {
    if (!this.updatedBy) {
      this.updatedBy = SYSTEM;
    }
  }
}
