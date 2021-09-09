import { HttpStatus, NotFoundException } from '@nestjs/common';
import { NestResponse } from './http/nest-response';
import { NestResponseBuilder } from './http/nest-response.builder';

export abstract class ControllerBase {
  Ok(object?: unknown): NestResponse {
    return new NestResponseBuilder()
      .withStatus(HttpStatus.OK)
      .withBody(object ? object : null)
      .build();
  }

  OkOrNotFound(object?: unknown): NestResponse {
    if (!object) throw new NotFoundException();
    return this.Ok(object);
  }

  Created(path: string, object: unknown): NestResponse {
    return new NestResponseBuilder()
      .withStatus(HttpStatus.CREATED)
      .withHeaders({ location: path })
      .withBody(object)
      .build();
  }

  BadRequest(message: string = null): NestResponse {
    return new NestResponseBuilder()
      .withStatus(HttpStatus.BAD_REQUEST)
      .withBody(message)
      .build();
  }
}
