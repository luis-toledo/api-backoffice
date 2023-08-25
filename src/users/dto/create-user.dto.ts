import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'João da Silva',
  })
  @IsNotEmpty({ message: 'O nome não pode estar vazio!' })
  @IsString({ message: 'O nome deve ser uma String' })
  name: string;

  @ApiProperty({
    example: 'devmyjourney@gmail.com',
  })
  @IsNotEmpty({ message: 'O email não pode estar vazio!' })
  @IsEmail(undefined, { message: 'Email inválido' })
  email: string;

  @ApiProperty({
    description: 'A senha deve ter entre 6 e 20 caracteres',
    example: 'senha12#',
  })
  @IsNotEmpty({ message: 'A senha não pode estar vazia!' })
  @MinLength(6, { message: 'Número mínimo de caracteres não atendido' })
  @MaxLength(20, { message: 'Número máximo de caracteres excedido' })
  password: string;
}
