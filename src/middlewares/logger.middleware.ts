import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: (error?: any) => void) {
    const { ip, method, originalUrl } = request;
    const userAgent = request.get('user-agent') || '';
    // 라우터가 끝나고 실행되기에 on 메서드
    response.on('finish', () => {
      const { statusCode } = response;
      const contentLength = response.get('content-length');
      this.logger.log(
        `${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`,
      );
    });
    // next 써야 다음으로 넘어감
    next();
  }
}
