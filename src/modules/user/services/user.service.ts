import { Injectable } from '@nestjs/common';
import { AbstractUserService } from '../interface/user.interface.service';
import { CreateUserDTO, UserDTO } from '../dto/user.dto';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, IsNull } from 'typeorm';
import { UserEntity } from '../repository/user.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UserService extends AbstractUserService {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {
    super();
  }

  async findMany(entityManager = this.entityManager): Promise<UserDTO[]> {
    const datas = await entityManager.find(UserEntity, {
      where: { deletedAt: IsNull() },
    });

    const mapped = datas.map((data) => {
      const user = plainToInstance(UserDTO, data);
      return user;
    });

    return mapped;
  }

  async findById(
    { id }: { id: string },
    entityManager = this.entityManager,
  ): Promise<UserDTO | null> {
    const data = await entityManager.findOne(UserEntity, {
      where: { id, deletedAt: IsNull() },
    });

    if (!data) return data;

    const mapped = new UserDTO();
    Object.assign(mapped, data);

    return mapped;
  }

  async insert(
    payload: CreateUserDTO,
    entityManager = this.entityManager,
  ): Promise<string> {
    const data = new UserEntity();

    Object.assign(data, payload);

    const entity = await entityManager.save(data);

    return entity.id;
  }

  async delete(
    { id }: { id: string },
    entityManager = this.entityManager,
  ): Promise<string> {
    const existing = await this.findById({ id }, entityManager);

    if (!existing) throw Error('Not Exist');

    await entityManager.softDelete(UserEntity, { id });

    return 'Success';
  }
}
