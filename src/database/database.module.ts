import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://luisftoledo:dba@cluster0.k5bnrpx.mongodb.net/',
    ),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'dbadbs',
      database: 'api',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
