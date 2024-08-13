import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { AbstractUserService } from './implementation/service/user.service';
import { UserService } from './services/user.service';
import { RoleController } from './controller/role.controller';
import { AbstractRoleService } from './implementation/service/role.service';
import { RoleService } from './services/role.service';
import { AbstractUserRoleService } from './implementation/service/userrole.service';
import { UserRoleService } from './services/userrole.service';
import { UserRoleController } from './controller/userrole.controller';

@Module({
  controllers: [UserController, RoleController, UserRoleController],
  providers: [
    {
      provide: AbstractUserService,
      useClass: UserService,
    },
    {
      provide: AbstractRoleService,
      useClass: RoleService,
    },
    {
      provide: AbstractUserRoleService,
      useClass: UserRoleService,
    },
  ],
  exports: [AbstractUserService, AbstractRoleService, AbstractUserRoleService],
})
export class UserModule {}
