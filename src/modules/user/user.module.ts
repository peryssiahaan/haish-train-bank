import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { IUserService } from './implementation/service/user.service';
import { UserService } from './services/user.service';
import { RoleController } from './controller/role.controller';
import { IRoleService } from './implementation/service/role.service';
import { RoleService } from './services/role.service';
import { IUserRoleService } from './implementation/service/userrole.service';
import { UserRoleService } from './services/userrole.service';
import { UserRoleController } from './controller/userrole.controller';

@Module({
  controllers: [UserController, RoleController, UserRoleController],
  providers: [
    {
      provide: IUserService,
      useClass: UserService,
    },
    {
      provide: IRoleService,
      useClass: RoleService,
    },
    {
      provide: IUserRoleService,
      useClass: UserRoleService,
    },
  ],
  exports: [IUserService, IRoleService, IUserRoleService],
})
export class UserModule {}
