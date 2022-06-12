import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const err = exception.getResponse() as
      | { message: any; statusCode: number }
      | { error: string; statusCode: 400; message: string[] }; //class validator error type
    // class validator 에서 발생시킨 에러
    if (typeof err !== 'string' && err.statusCode === 400) {
      // class-validator 에러
      return response.status(status).json({
        success: false,
        code: status,
        data: err.message,
      });
    }

    // 직접 발생시킨 에러
    response.status(status).json({
      success: false,
      code: status,
      data: err.message,
    });
  }
}
