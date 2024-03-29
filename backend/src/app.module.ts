import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { WinstonModule, utilities } from 'nest-winston';
import { RobustLoggerService } from './robust-logger/robust-logger.service';
import { PacerService } from './pacer/pacer.service';
import * as winston from 'winston';
import { ConfigModule } from '@nestjs/config';
import { FileStorageService } from './file-storage/file-storage.service';
import { DbService } from './db/db.service';
import { TelegramService } from './telegram/telegram.service';
import { TwitterService } from './twitter/twitter.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
    }),
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            utilities.format.nestLike('WarAgr', { prettyPrint: true }),
          ),
        }),
      ],
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    RobustLoggerService,
    PacerService,
    FileStorageService,
    DbService,
    TelegramService,
    TwitterService,
  ],
})
export class AppModule {}
