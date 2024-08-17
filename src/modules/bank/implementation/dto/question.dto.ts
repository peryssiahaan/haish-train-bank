import { IsEnum, IsString, IsUUID } from 'class-validator';
import { IQuestion } from '../interface/question.interface';
import { DIFFICULTIES } from 'src/common/constant/object';
import { ApiProperty } from '@nestjs/swagger';
import { AbstractDTO } from 'src/common/dto/abstract.dto';
import { Exclude, Expose } from 'class-transformer';

export class CreateQuestionDTO implements Omit<IQuestion, 'id'> {
  @IsString()
  value: string;

  @ApiProperty({ enum: DIFFICULTIES })
  @IsEnum(DIFFICULTIES)
  difficulty: 'NORMAL' | 'INTERMEDIATE' | 'ADVANCE';
}

@Exclude()
export class QuestionDTO extends AbstractDTO implements IQuestion {
  @Expose()
  id: string;

  @Expose()
  value: string;

  @Expose()
  difficulty: 'NORMAL' | 'INTERMEDIATE' | 'ADVANCE';
}

@Exclude()
export class QuestionPrivateDTO extends AbstractDTO implements IQuestion {
  @Expose()
  id: string;

  @Expose()
  value: string;

  @Expose()
  difficulty: 'NORMAL' | 'INTERMEDIATE' | 'ADVANCE';

  @Expose()
  createdAt: Date;

  @Expose()
  createdBy: string;
}

export class FindQuestionParamDTO implements Pick<IQuestion, 'id'> {
  @IsUUID('4')
  id: string;
}

export class UpdateQuestionDTO implements Omit<IQuestion, 'id'> {
  @IsString()
  value: string;

  @ApiProperty({ enum: DIFFICULTIES })
  @IsEnum(DIFFICULTIES)
  difficulty: 'NORMAL' | 'INTERMEDIATE' | 'ADVANCE';
}
