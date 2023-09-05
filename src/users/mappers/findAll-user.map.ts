import { FindAllUserDto } from '../dto/findAll-user.dto';
import { UserDocument } from '../entities/user.entity';

export class FindAllUserMap {
  static execute(users: Array<UserDocument>): Array<FindAllUserDto> {
    return users.map((user) => {
      return {
        name: user.name,
        email: user.email,
      };
    });
  }
}
