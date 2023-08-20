import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://luisftoledo:dba@cluster0.k5bnrpx.mongodb.net/',
    ),
  ],
})
export class DatabaseModule {}
