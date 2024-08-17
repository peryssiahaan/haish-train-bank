import { DIFFICULTIES, TDIFFICULTIES } from '../../../common/constant/object';
import { AbstractEntity } from '../../../common/entity/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'questions' })
export class QuestionEntity extends AbstractEntity {
  @Column({ type: 'varchar', unique: true })
  value: string;

  @Column({ type: 'enum', enum: DIFFICULTIES })
  difficulty: TDIFFICULTIES;
}
