import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { config } from './database.config';

import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';

const database: MongoConnectionOptions = {
  type: 'mongodb',
  url: config.url,
  entities: [__dirname + '/../**/*.entity{.ts, .js}'],
};

@Module({
  imports: [
    TypeOrmModule.forRoot(database),
  ],
  exports: [
    TypeOrmModule,
  ],
})
export class TypeOrmDatabaseModule {}
