import { Module } from '@nestjs/common';
import { ApiController } from './login.controller';

@Module({
  controllers: [ApiController],
})
export class LoginModule {}
