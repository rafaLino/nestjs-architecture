import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repositories/user.repository';

import { CreateAccountResult } from './create-account.result';

@Injectable()
export class CreateAccountUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(
    email: string,
    name: string,
    password: string,
  ): Promise<CreateAccountResult> {
    const user = await this.userRepository.create({
      email,
      name,
      password,
      account: { create: {} },
    });

    return {
      accountId: user.accountId,
      email: user.email,
      name: user.name,
    };
  }
}
