import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { AbstractUserService } from './implementation/service/user.service';
import { UserService } from './services/user.service';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: AbstractUserService,
      useClass: UserService,
    },
  ],
})
export class UserModule {}
