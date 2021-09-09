import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NestResponse } from './nest-response';

@Injectable()
export class NestResponseInterceptor implements NestInterceptor {
  private adapter: AbstractHttpAdapter;
  constructor(adapterHost: HttpAdapterHost) {
    this.adapter = adapterHost.httpAdapter;
  }
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((nestResponse: NestResponse) => {
        if (nestResponse instanceof NestResponse) {
          const httpContext = context.switchToHttp();
          const response = httpContext.getResponse();
          const { headers, body, status } = nestResponse;

          Object.entries(headers).forEach((x) => {
            this.adapter.setHeader(response, x[0], String(x[1]));
          });

          this.adapter.status(response, status);

          return body;
        }

        return nestResponse;
      }),
    );
  }
}
