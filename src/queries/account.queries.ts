import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaContext } from 'src/repositories/context/prisma.context';
import { AccountQueryResult } from './account-query.result';

@Injectable()
export class AccountQueries {
  constructor(private context: PrismaContext) {}

  async getAccount(id: number): Promise<AccountQueryResult> {
    const user = await this.context.user.findUnique({ where: { id: id } });

    if (!user) throw new NotFoundException();

    return {
      accountId: user.accountId,
      email: user.email,
      name: user.name,
    };
  }
}
