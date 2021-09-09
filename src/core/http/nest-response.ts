export class NestResponse {
  status: number;
  headers: any;
  body: any;
  constructor(nestResponse: NestResponse) {
    Object.assign(this, nestResponse);
  }
}
