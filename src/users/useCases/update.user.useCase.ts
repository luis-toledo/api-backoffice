import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../entities/user.entity';
import { Model } from 'mongoose';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UpdateUserUseCase {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.userModel.findOne({ email: updateUserDto.email });
      if (user) {
        throw new BadRequestException('Email já cadastrado');
      }
      this.userModel
        .findOneAndUpdate({ _id: id, updateUserDto }, { rawResult: true })
        .exec();
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
