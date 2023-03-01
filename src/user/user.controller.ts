import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  findUser(): string {
    return 'im a user';
  }
}
