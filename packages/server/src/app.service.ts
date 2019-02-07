import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): string {
    return `
    <html><body>
      <h1>Missing page!</h1>
      <a href='/api'>OpenAPI v2 (formerly known as Swagger)</a>
    </body></html>`;
  }
}
