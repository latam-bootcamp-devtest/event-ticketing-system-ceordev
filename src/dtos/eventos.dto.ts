import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateEventoDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsNumber()
    @IsNotEmpty()
    capacidad: number;

    @IsDate()
    @IsNotEmpty()
    fechaEvento: string;
}

export class UpdateEventoDto {
    @IsString()
    @IsOptional()
    nombre: string;

    @IsNumber()
    @IsOptional()
    capacidad: number;

    @IsDate()
    @IsOptional()
    fechaEvento: string;

    @IsNumber()
    @IsOptional()
    asientosDisponibles: number;
}

export class ReturnEventoDto {
    @IsString()
    @IsNotEmpty()
    eventId: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsDate()
    @IsNotEmpty()
    date: string;

    @IsNumber()
    @IsNotEmpty()
    availableSeats: number;
}