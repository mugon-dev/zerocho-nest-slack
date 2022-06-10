import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// 요청과 응답을 처리
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
