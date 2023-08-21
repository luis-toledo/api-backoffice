import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { CreateUserUseCase } from './useCases/create.user.useCase';
import { UpdateUserUseCase } from './useCases/update.user.useCase';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService, CreateUserUseCase, UpdateUserUseCase],
})
export class UsersModule {}
