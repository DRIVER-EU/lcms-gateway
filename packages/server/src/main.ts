import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  process.on('uncaughtException', err => {
    console.error('Caught exception: ' + err);
  });
  process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection:', reason.stack || reason);
  });

  const app = await NestFactory.create(AppModule, { cors: true });

  const options = new DocumentBuilder()
    .setTitle('LCMS gateway service')
    .setDescription('The LCMS Gateway API description')
    .setVersion('0.1')
    .addTag('LCMS gateway service')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection:', reason.stack || reason);
    // Recommended: send the information to sentry.io
    // or whatever crash reporting service you use
  });

  const port = process.env.LCMS_GATEWAY_PORT || 3333;
  await app.listen(port, () => {
    console.log(
      `LCMS Gateway Service is listening on port ${port}. Swagger documentation is available at 'http://localhost:${port}/api'.`,
    );
  });
}
bootstrap();
