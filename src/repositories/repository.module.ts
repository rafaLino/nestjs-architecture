import { Global, Module } from '@nestjs/common';
import { AccountQueries } from '../queries/account.queries';

import { AccountRepository } from './account.repository';
import { PrismaContext } from './context/prisma.context';
import { UserRepository } from './user.repository';
const REPOSITORIES = [UserRepository, AccountRepository, AccountQueries];
@Global()
@Module({
  providers: [PrismaContext, ...REPOSITORIES],
  exports: [...REPOSITORIES],
})
export class RepositoryModule {}
