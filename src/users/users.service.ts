import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { CreateUserUseCase } from './useCases/create.user.useCase';
import { UpdateUserUseCase } from './useCases/update.user.useCase';

@Injectable()
export class UsersService {
  constructor(
    @Inject(CreateUserUseCase)
    private createUserUseCase: CreateUserUseCase,
    @Inject(UpdateUserUseCase)
    private updateUserUseCase: UpdateUserUseCase,
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.createUserUseCase.execute(createUserDto);
  }

  findAll() {
    return this.userModel.find().exec();
  }

  findOne(id: string) {
    return this.userModel.findById(id).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.updateUserUseCase.update(id, updateUserDto);
  }

  remove(id: string) {
    this.userModel.findOneAndDelete({ _id: id }).exec();
  }
}
