import { Injectable } from '@nestjs/common';
// 요청과 응답에 상관없이 이루어지는 로직
// 협업을 위해 구조를 강제화
// 요청응답, 비즈니스로직을 분리
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
