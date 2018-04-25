import { Module } from '@nestjs/common';

import { TypeOrmDatabaseModule } from './database/typeorm-database.module';

import { ItemModule } from './item/item.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmDatabaseModule,
    ItemModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule {
}
