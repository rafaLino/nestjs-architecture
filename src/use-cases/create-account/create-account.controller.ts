import { Body, Controller, Post } from '@nestjs/common';
import { NestResponse } from '../../core/http/nest-response';
import { ControllerBase } from '../../core/controller-base';
import { CreateAccountDto } from './create-account.dto';
import { CreateAccountUseCase } from './create-account.useCase';

@Controller('account')
export class createAccountController extends ControllerBase {
  constructor(private useCase: CreateAccountUseCase) {
    super();
  }

  @Post()
  async Create(@Body() model: CreateAccountDto): Promise<NestResponse> {
    const result = await this.useCase.execute(
      model.email,
      model.name,
      model.password,
    );

    return this.Created(`account/${result.accountId}`, result);
  }
}
