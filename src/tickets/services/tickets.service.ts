import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateEventoDto } from 'src/dtos/eventos.dto';
import { CreateTicketDto } from 'src/dtos/tickets.dto';
import { Evento } from 'src/entities/evento.entity';
import { Ticket } from 'src/entities/tickets.entity';
import { Usuario } from 'src/entities/usuario.entity';
import { EventosService } from 'src/eventos/services/eventos.service';
import { UsuariosService } from 'src/usuarios/services/usuarios.service';
import { Repository } from 'typeorm';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Evento) private eventoRepository: Repository<Evento>,
    @InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>,
    @InjectRepository(Ticket) private ticketRepository: Repository<Ticket>,
  ) {}

  async bookTicket(ticket: CreateTicketDto) {
    console.log(ticket);
    let usuario = await this.usuarioRepository.findOne({
      where: { id: ticket.idUsuario },
    });
    let evento = await this.eventoRepository.findOne({
      where: { id: ticket.idEvento },
    });

    console.log(usuario);
    console.log(evento);
    if (!usuario) {
      throw new HttpException(
        {
          error: 'No existe el usuario',
        },
        HttpStatus.CONFLICT,
      );
    }

    if (!evento) {
      throw new HttpException(
        {
          error: 'No existe el evento',
        },
        HttpStatus.CONFLICT,
      );
    }

    if ((evento.asientosDisponibles = 0)) {
      throw new HttpException(
        {
          error: 'Ya no hay asientos :(',
        },
        HttpStatus.CONFLICT,
      );
    }

    let newTicket = await this.ticketRepository.create(ticket);
    newTicket.usuario = usuario;
    newTicket.evento = evento;

    const createdTicket = await this.ticketRepository.save(newTicket);

    let bodyToUpdate = new UpdateEventoDto();

    bodyToUpdate.asientosDisponibles = evento.asientosDisponibles--;
    
    await this.eventoRepository.merge(evento, bodyToUpdate)
    await this.eventoRepository.save(evento);

    return {
      ticketId: createdTicket.id,
      userId: createdTicket.usuario.id,
      eventId: createdTicket.evento.id,
    };
  }

  async cancelBooking(idTicket: string) {
    let ticket = await this.ticketRepository.findOne({
      where: { id: idTicket },
    });

    if (ticket) {
     await this.ticketRepository.delete(idTicket);
     
     throw new HttpException(
        {
          error: '',
        },
        HttpStatus.NO_CONTENT,
      );
    } else {
      throw new HttpException(
        {
          error: 'No existe el ticket',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
