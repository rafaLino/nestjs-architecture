import { Injectable } from '@nestjs/common';
import { Account } from '@prisma/client';
import { PrismaContext } from './context/prisma.context';

@Injectable()
export class AccountRepository {
  constructor(private context: PrismaContext) {}

  create(): Promise<Account> {
    return this.context.account.create({ data: {} });
  }
}
