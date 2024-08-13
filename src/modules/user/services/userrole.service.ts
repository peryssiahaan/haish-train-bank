import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { AbstractUserRoleService } from '../implementation/service/userrole.service';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import {
  CreateUserRoleDTO,
  UpdateUserRoleDTO,
  UserRoleDTO,
} from '../implementation/dto/userrole.dto';
import { UserRoleEntity } from '../repository/userrole.entity';
import { plainToInstance } from 'class-transformer';
import { UserEntity } from '../repository/user.entity';
import { RoleEntity } from '../repository/role.entity';

@Injectable()
export class UserRoleService extends AbstractUserRoleService {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {
    super();
  }

  async findMany(entityManager = this.entityManager): Promise<UserRoleDTO[]> {
    const datas = await entityManager.find(UserRoleEntity);

    const mapped = datas.map((data) => {
      const user = plainToInstance(UserRoleDTO, data);
      return user;
    });

    return mapped;
  }

  async findById(
    { id }: { id: string },
    entityManager = this.entityManager,
  ): Promise<UserRoleDTO> {
    const data = await entityManager.findOne(UserRoleEntity, {
      where: { id },
    });

    if (!data) throw new NotFoundException('Not Exist');

    const mapped = plainToInstance(UserRoleDTO, data);

    return mapped;
  }

  async insert(
    { roleId, userId }: CreateUserRoleDTO,
    entityManager = this.entityManager,
  ): Promise<string> {
    const data = new UserRoleEntity();

    const [user, role] = await Promise.all([
      entityManager.findOneBy(UserEntity, { id: userId }),
      entityManager.findOneBy(RoleEntity, { id: roleId }),
    ]);

    if (!user)
      throw new NotFoundException(
        'During UserRole Insertion. User Do Not Exist',
      );
    if (!role)
      throw new NotFoundException(
        'During UserRole Insertion. Role Do Not Exist',
      );

    data.role = role;
    data.user = user;

    const entity = await entityManager.save(data);

    return entity.id;
  }

  async update(
    { id }: { id: string },
    { roleId }: UpdateUserRoleDTO,
    entityManager = this.entityManager,
  ): Promise<string> {
    const existing = await entityManager.findOne(UserRoleEntity, {
      where: { id },
    });

    if (!existing) throw new NotFoundException('Not Exist');

    if (existing.role.id === roleId)
      throw new ConflictException('Not Difference With Old Data');

    const role = await entityManager.findOneBy(RoleEntity, { id: roleId });

    if (!role)
      throw new NotFoundException(
        'During UserRole Mutation. Role Do Not Exist',
      );

    existing.role = role;

    await entityManager.save(existing);

    return 'Success';
  }

  async delete(
    { id }: { id: string },
    entityManager = this.entityManager,
  ): Promise<string> {
    const existing = await entityManager.findOne(UserRoleEntity, {
      where: { id },
    });

    if (!existing) throw new NotFoundException('Not Exist');

    await entityManager.delete(UserRoleEntity, { id });

    return 'Success';
  }
}
