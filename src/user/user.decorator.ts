import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserCurrent = createParamDecorator((data: any, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user ?? null;
});