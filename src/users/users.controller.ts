import { Body, Controller, Get, Post } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers() {
    return;
  }

  @Post()
  postUsers(@Body() data: JoinRequestDto) {
    this.userService.postUsers(data.email, data.nickname, data.password);
    return;
  }

  @Post('login')
  logIn() {
    return;
  }

  @Post('logout')
  logOut() {
    return;
  }
}
