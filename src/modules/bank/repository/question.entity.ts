import { AbstractEntity } from 'src/common/entity/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'questions' })
export class QuestionEntity extends AbstractEntity {
  @Column({ type: 'varchar', unique: true })
  value: string;

  @Column({})
  vector: number[];
}
