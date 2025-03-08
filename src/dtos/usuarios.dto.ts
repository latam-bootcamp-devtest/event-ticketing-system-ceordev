import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ROL } from 'src/enums/roles.enum';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  materno: string;

  @IsString()
  @IsNotEmpty()
  paterno: string;

  @IsString()
  @IsEnum(ROL)
  rol: ROL;
}


export class UpdateUsuarioDto {
    @IsString()
    @IsOptional()
    nombre: string;
  
    @IsString()
    @IsOptional()
    materno: string;
  
    @IsString()
    @IsOptional()
    paterno: string;
  }