import { Module } from '@nestjs/common';
import { createAccountController } from './create-account.controller';
import { CreateAccountUseCase } from './create-account.useCase';

@Module({
  controllers: [createAccountController],
  providers: [CreateAccountUseCase],
})
export class CreateAccountModule {}
