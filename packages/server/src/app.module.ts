import * as path from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from 'nestjs-config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivitiesModule } from './api/activities/activities.module';
import { LoginModule } from './api/login/login.module';

@Module({
  imports: [
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    LoginModule,
    ActivitiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
