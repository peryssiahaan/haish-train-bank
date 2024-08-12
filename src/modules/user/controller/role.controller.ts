import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  CreateRoleDTO,
  FindRoleParamDTO,
  UpdateRoleDTO,
} from '../implementation/dto/role.dto';
import { AbstractRoleService } from '../implementation/service/role.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Role')
@Controller({ version: '1', path: 'roles' })
export class RoleController {
  constructor(private readonly roleService: AbstractRoleService) {}

  @Get()
  async getAll() {
    return this.roleService.findMany();
  }

  @Post()
  async addOne(
    @Body()
    body: CreateRoleDTO,
  ) {
    return this.roleService.insert(body);
  }

  @Get(':id')
  async getById(
    @Param()
    param: FindRoleParamDTO,
  ) {
    return this.roleService.findById(param);
  }

  @Put(':id')
  async update(
    @Param()
    param: FindRoleParamDTO,

    @Body()
    body: UpdateRoleDTO,
  ) {
    return this.roleService.update(param, body);
  }

  @Delete(':id')
  async removeById(
    @Param()
    param: FindRoleParamDTO,
  ) {
    return this.roleService.delete(param);
  }
}
