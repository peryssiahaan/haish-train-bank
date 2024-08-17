import { Injectable, NotFoundException } from '@nestjs/common';
import { IUserService } from '../implementation/service/user.service';
import {
  CreateUserDTO,
  UpdateUserDTO,
  UserPrivateDTO,
  UserDTO,
} from '../implementation/dto/user.dto';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, IsNull } from 'typeorm';
import { UserEntity } from '../repository/user.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}

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
  ): Promise<UserPrivateDTO> {
    const data = await entityManager.findOne(UserEntity, {
      where: { id, deletedAt: IsNull() },
    });

    if (!data) throw new NotFoundException('Not Exist');

    const mapped = plainToInstance(UserPrivateDTO, data);

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

  async update(
    { id }: { id: string },
    payload: UpdateUserDTO,
    entityManager = this.entityManager,
  ): Promise<string> {
    const existing = await entityManager.findOne(UserEntity, {
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
    const existing = await entityManager.findOne(UserEntity, {
      where: { id, deletedAt: IsNull() },
    });

    if (!existing) throw new NotFoundException('Not Exist');

    await entityManager.softDelete(UserEntity, { id });

    return 'Success';
  }
}
