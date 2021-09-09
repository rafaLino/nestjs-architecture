import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpExceptionFilter } from './core/filters/http-exception.filter';
import { NestResponseInterceptor } from './core/http/nest-response.interceptor';

import { RepositoryModule } from './repositories/repository.module';
import { CreateAccountModule } from './use-cases/create-account/create-account.module';
import { GetAccountModule } from './use-cases/get-account/get-account.module';

@Module({
  imports: [RepositoryModule, CreateAccountModule, GetAccountModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: NestResponseInterceptor,
    },
  ],
})
export class AppModule {}
