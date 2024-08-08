import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { AbstractUserService } from './interface/user.interface.service';
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
