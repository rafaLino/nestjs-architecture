import { HttpStatus } from '@nestjs/common';
import { NestResponse } from './nest-response';

export class NestResponseBuilder {
  private response: NestResponse = {
    status: HttpStatus.OK,
    headers: {},
    body: {},
  };

  withStatus(httpStatus: HttpStatus): NestResponseBuilder {
    this.response.status = httpStatus;
    return this;
  }

  withHeaders(header: any): NestResponseBuilder {
    this.response.headers = header;
    return this;
  }

  withBody(body: any): NestResponseBuilder {
    this.response.body = body;
    return this;
  }

  build(): NestResponse {
    return new NestResponse(this.response);
  }
}
