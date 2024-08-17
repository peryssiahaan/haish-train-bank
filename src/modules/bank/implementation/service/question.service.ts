import { IAbstractService } from 'src/common/interface/abstract.interface';
import {
  CreateQuestionDTO,
  QuestionDTO,
  QuestionPrivateDTO,
  UpdateQuestionDTO,
} from '../dto/question.dto';

export abstract class IQuestionService implements IAbstractService {
  abstract findById(payload: { id: string }): Promise<QuestionPrivateDTO>;
  abstract findMany(): Promise<QuestionDTO[]>;
  abstract insert(payload: CreateQuestionDTO): Promise<string>;
  abstract update(
    identifier: { id: string },
    payload: UpdateQuestionDTO,
  ): Promise<string>;
  abstract delete(payload: { id: string }): Promise<string>;
}
