import { ApiProperty } from '@nestjs/swagger';

export class FindAllUserDto {
  @ApiProperty({ type: String, example: 'João da Silva' })
  name: string;

  @ApiProperty({ type: String, example: 'devmyjourney@gmail.com' })
  email: string;

  @ApiProperty({ type: String })
  password: string;
}
