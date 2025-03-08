import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTicketDto {
  @IsDate()
  @IsNotEmpty()
  fechaCompra: string;

  @IsString()
  @IsNotEmpty()
  idUsuario: string;

  @IsString()
  @IsNotEmpty()
  idEvento: string;
}

export class UpdateTicketDto {
  @IsDate()
  @IsOptional()
  fechaCompra: string;
}
