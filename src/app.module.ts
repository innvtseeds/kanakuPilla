import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { DbService } from './db/db.service';


@Module({
  controllers: [UserController],
  providers: [UserService, DbService],
  exports: [DbService]
})
export class AppModule {}
