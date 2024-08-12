import { Injectable, NotFoundException } from '@nestjs/common';
import { AbstractRoleService } from '../implementation/service/role.service';
import {
  CreateRoleDTO,
  RoleDTO,
  RolePrivateDTO,
  UpdateRoleDTO,
} from '../implementation/dto/role.dto';
import { RoleEntity } from '../repository/role.entity';
import { EntityManager, IsNull } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { InjectEntityManager } from '@nestjs/typeorm';

@Injectable()
export class RoleService extends AbstractRoleService {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {
    super();
  }

  async findById(
    {
      id,
    }: {
      id: string;
    },
    entityManager = this.entityManager,
  ): Promise<RolePrivateDTO> {
    const data = await entityManager.findOne(RoleEntity, {
      where: { id, deletedAt: IsNull() },
    });

    if (!data) throw new NotFoundException('Not Exist');

    const mapped = plainToInstance(RolePrivateDTO, data);

    return mapped;
  }

  async findMany(entityManager = this.entityManager): Promise<RoleDTO[]> {
    const datas = await entityManager.find(RoleEntity, {
      where: { deletedAt: IsNull() },
    });

    const mapped = datas.map((data) => {
      const user = plainToInstance(RoleDTO, data);
      return user;
    });

    return mapped;
  }

  async insert(
    payload: CreateRoleDTO,
    entityManager = this.entityManager,
  ): Promise<string> {
    const data = new RoleEntity();
    Object.assign(data, payload);

    const entity = await entityManager.save(data);

    return entity.id;
  }

  async update(
    { id }: { id: string },
    payload: UpdateRoleDTO,
    entityManager = this.entityManager,
  ): Promise<string> {
    const existing = await entityManager.findOne(RoleEntity, {
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
    const existing = await entityManager.findOne(RoleEntity, {
      where: { id, deletedAt: IsNull() },
    });

    if (!existing) throw new NotFoundException('Not Exist');

    await entityManager.softDelete(RoleEntity, { id });

    return 'Success';
  }
}
