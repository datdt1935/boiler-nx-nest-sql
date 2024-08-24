import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationModule } from '@boiler-nestjs-sql/location';

@Module({
  imports: [LocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
