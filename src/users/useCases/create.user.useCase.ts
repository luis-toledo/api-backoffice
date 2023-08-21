import { BadRequestException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  async execute(createUserDto: CreateUserDto) {
    try {
      const user = await this.userModel.findOne({ email: createUserDto.email });
      if (user) {
        throw new BadRequestException('Usuário já existente');
      }
      const saltOrRounds = 10;
      const passToHash = await bcrypt.hash(
        createUserDto.password,
        saltOrRounds,
      );
      await new this.userModel({ createUserDto, password: passToHash }).save();
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
