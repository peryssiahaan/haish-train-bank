import { Body, Controller, Get, Post } from '@nestjs/common';
import { AbstractUserRoleService } from '../implementation/service/userrole.service';
import { CreateUserRoleDTO } from '../implementation/dto/userrole.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User Role')
@Controller({ version: '1', path: 'userroles' })
export class UserRoleController {
  constructor(private readonly userRoleService: AbstractUserRoleService) {}

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
}
