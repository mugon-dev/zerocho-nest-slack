import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// 요청과 응답을 기리
@Controller()
export class AppController {
  // module 의 provider 와 생성자의 타입을 바탕으로 추론하여 nest 에서 자동으로 의존성을 주입해줌
  // 이렇게 함으로써 객체간의 결합도를 낮춰줌
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
