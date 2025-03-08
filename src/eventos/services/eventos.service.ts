import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { error } from 'console';
import { CreateEventoDto, ReturnEventoDto } from 'src/dtos/eventos.dto';
import { Evento } from 'src/entities/evento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventosService {
  constructor(
    @InjectRepository(Evento) private eventoRepository: Repository<Evento>,
  ) {}

  async createEvento(evento: CreateEventoDto) {
    console.log(evento);
    const checkEvento = await this.eventoRepository.find({
      where: [{ nombre: evento.nombre }, { fechaEvento: evento.fechaEvento }],
    });
    console.log(checkEvento);

    if (checkEvento.length === 0) {
      const newEvento = await this.eventoRepository.create(evento);
      newEvento.asientosDisponibles = evento.capacidad;
      const createdEvento = await this.eventoRepository.save(newEvento);

      return {
        eventId: createdEvento.id,
        name: createdEvento.nombre,
        date: createdEvento.fechaEvento,
        availableSeats: createdEvento.asientosDisponibles,
      };
    } else {
      throw new HttpException(
        {
          error: 'existe el evento',
        },
        HttpStatus.CONFLICT,
      );
    }
  }

  async findEventos(page: number, pageSize: number) {
    let eventos: ReturnEventoDto[];
    const eventosFund = await this.eventoRepository.find({
      order: { fechaEvento: 'ASC' },
    });

    return eventosFund;
  }
}
