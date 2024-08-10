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
  CreateUserDTO,
  FindUserParamDTO,
  UpdateUserDTO,
} from '../implementation/dto/user.dto';
import { AbstractUserService } from '../implementation/service/user.service';

@Controller({ version: '1', path: 'users' })
export class UserController {
  constructor(private readonly userService: AbstractUserService) {}

  @Get()
  async getAll() {
    return this.userService.findMany();
  }

  @Post()
  async addOne(
    @Body()
    body: CreateUserDTO,
  ) {
    return this.userService.insert(body);
  }

  @Get(':id')
  async getById(
    @Param()
    param: FindUserParamDTO,
  ) {
    return this.userService.findById(param);
  }

  @Put(':id')
  async update(
    @Param()
    param: FindUserParamDTO,

    @Body()
    body: UpdateUserDTO,
  ) {
    return this.userService.update(param, body);
  }

  @Delete(':id')
  async removeById(
    @Param()
    param: FindUserParamDTO,
  ) {
    return this.userService.delete(param);
  }
}
