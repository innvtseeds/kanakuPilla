import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('GetUsers')
  async GetUsers() {
    return await this.userService.GetUsers();
  }

  @Post('CreateUser')
  async CreateUser(@Body() body) {
    return await this.userService.CreateUser(body.name);
  }
}
