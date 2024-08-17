import { Injectable, NotFoundException } from '@nestjs/common';
import { IQuestionService } from '../implementation/service/question.service';
import {
  CreateQuestionDTO,
  QuestionDTO,
  QuestionPrivateDTO,
  UpdateQuestionDTO,
} from '../implementation/dto/question.dto';
import { plainToInstance } from 'class-transformer';
import { EntityManager, IsNull } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { QuestionEntity } from '../repository/question.entity';

@Injectable()
export class QuestionService implements IQuestionService {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}
  async findById(
    { id }: { id: string },
    entityManager = this.entityManager,
  ): Promise<QuestionPrivateDTO> {
    const data = await entityManager.findOne(QuestionEntity, {
      where: { id, deletedAt: IsNull() },
    });

    if (!data) throw new NotFoundException('Not Exist');

    const mapped = plainToInstance(QuestionPrivateDTO, data);

    return mapped;
  }

  async findMany(entityManager = this.entityManager): Promise<QuestionDTO[]> {
    const datas = await entityManager.find(QuestionEntity, {
      where: { deletedAt: IsNull() },
    });

    const mapped = datas.map((data) => {
      const user = plainToInstance(QuestionDTO, data);
      return user;
    });

    return mapped;
  }

  async insert(
    payload: CreateQuestionDTO,
    entityManager = this.entityManager,
  ): Promise<string> {
    const data = new QuestionEntity();
    Object.assign(data, payload);

    const entity = await entityManager.save(data);

    return entity.id;
  }

  async update(
    { id }: { id: string },
    payload: UpdateQuestionDTO,
    entityManager = this.entityManager,
  ): Promise<string> {
    const existing = await entityManager.findOne(QuestionEntity, {
      where: { id, deletedAt: IsNull() },
    });

    if (!existing) throw new NotFoundException('Not Exist');

    Object.assign(existing, payload);

    await entityManager.save(existing);

    return 'Success';
  }

  async delete(
    { id }: { id: string },
    entityManager = this.entityManager,
  ): Promise<string> {
    const existing = await entityManager.findOne(QuestionEntity, {
      where: { id, deletedAt: IsNull() },
    });

    if (!existing) throw new NotFoundException('Not Exist');

    await entityManager.softDelete(QuestionEntity, { id });

    return 'Success';
  }
}
