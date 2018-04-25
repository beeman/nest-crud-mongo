import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './item/item.module';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';

const database: MongoConnectionOptions = {
  type: 'mongodb',
  url: 'mongodb://localhost/nest_crud_mongo',
  entities: [__dirname + '/../**/*.entity{.ts, .js}'],
};

@Module({
  imports: [
    TypeOrmModule.forRoot(database),
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
