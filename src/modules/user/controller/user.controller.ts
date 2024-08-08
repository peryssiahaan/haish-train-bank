import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDTO, FindUserParamDTO } from '../dto/user.dto';
import { AbstractUserService } from '../interface/user.interface.service';

@Controller({ version: '1', path: 'users' })
export class UserController {
  constructor(private readonly userService: AbstractUserService) {}

  @Get()
  async getAll() {
    const datas = await this.userService.findMany();

    return datas;
  }

  @Get(':id')
  async getById(
    @Param()
    param: FindUserParamDTO,
  ) {
    const data = await this.userService.findById(param);

    return data;
  }

  @Post()
  async addOne(
    @Body()
    body: CreateUserDTO,
  ) {
    const result = await this.userService.insert(body);

    return result;
  }
}
