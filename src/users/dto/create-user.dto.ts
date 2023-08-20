import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'O nome não pode estar vazio!' })
  @IsString({ message: 'O nome deve ser uma String' })
  name: string;

  @IsNotEmpty({ message: 'O email não pode estar vazio!' })
  @IsEmail(undefined, { message: 'Email inválido' })
  email: string;

  @IsNotEmpty({ message: 'A senha não pode estar vazia!' })
  @MinLength(6, { message: 'Número mínimo de caracteres não atendido' })
  @MaxLength(20, { message: 'Número máximo de caracteres excedido' })
  password: string;
}
