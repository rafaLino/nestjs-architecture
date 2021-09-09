import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaContext } from './context/prisma.context';

@Injectable()
export class UserRepository {
  constructor(private context: PrismaContext) {}

  async getList(): Promise<User[]> {
    return this.context.user.findMany();
  }

  async getById(id: number): Promise<User | null> {
    return this.context.user.findUnique({ where: { id: id } });
  }

  async getByEmail(email: string): Promise<User | null> {
    return this.context.user.findUnique({ where: { email: email } });
  }

  async create(user: Prisma.UserCreateInput): Promise<User> {
    return this.context.user.create({ data: user });
  }
}
