import { Controller, Get, Param } from '@nestjs/common';
import { ControllerBase } from '../../core/controller-base';
import { NestResponse } from '../../core/http/nest-response';
import { AccountQueries } from '../../queries/account.queries';

@Controller('account')
export class GetAccountController extends ControllerBase {
  constructor(private accountQueries: AccountQueries) {
    super();
  }
  @Get(':id')
  async getAccount(@Param('id') id: string): Promise<NestResponse> {
    return this.OkOrNotFound(await this.accountQueries.getAccount(+id));
  }
}
