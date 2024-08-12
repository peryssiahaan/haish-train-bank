import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { AbstractUserService } from './implementation/service/user.service';
import { UserService } from './services/user.service';
import { RoleController } from './controller/role.controller';
import { AbstractRoleService } from './implementation/service/role.service';
import { RoleService } from './services/role.service';

@Module({
  controllers: [UserController, RoleController],
  providers: [
    {
      provide: AbstractUserService,
      useClass: UserService,
    },
    {
      provide: AbstractRoleService,
      useClass: RoleService,
    },
  ],
})
export class UserModule {}
