import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IUserRoleService } from '../implementation/service/userrole.service';
import {
  CreateUserRoleDTO,
  FindUserRoleParamDTO,
  UpdateUserRoleDTO,
} from '../implementation/dto/userrole.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User Role')
@Controller({ version: '1', path: 'userroles' })
export class UserRoleController {
  constructor(private readonly userRoleService: IUserRoleService) {}

  @Get()
  async getAll() {
    return this.userRoleService.findMany();
  }

  @Post()
  async assign(
    @Body()
    body: CreateUserRoleDTO,
  ) {
    return this.userRoleService.insert(body);
  }

  @Get(':id')
  async getOne(
    @Param()
    param: FindUserRoleParamDTO,
  ) {
    return this.userRoleService.findById(param);
  }

  @Put(':id')
  async mutate(
    @Param()
    param: FindUserRoleParamDTO,

    @Body()
    body: UpdateUserRoleDTO,
  ) {
    return this.userRoleService.update(param, body);
  }

  @Delete(':id')
  async remove(
    @Param()
    param: FindUserRoleParamDTO,
  ) {
    return this.userRoleService.delete(param);
  }
}
