import { Module } from '@nestjs/common';
import { GetAccountController } from './get-account.controller';

@Module({
  controllers: [GetAccountController],
})
export class GetAccountModule {}
