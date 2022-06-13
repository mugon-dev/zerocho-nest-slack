import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const can = await super.canActivate(context);
    if (can) {
      const request = context.switchToHttp().getRequest();
      console.log('login for cookie');
      await super.logIn(request);
    }
    return true;
    // 다른 방법
    // const result = (await super.canActivate(context)) as boolean;
    // await super.logIn(context.switchToHttp().getRequest());
    // return result;
  }
}
