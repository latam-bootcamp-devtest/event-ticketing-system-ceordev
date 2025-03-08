import { Module } from '@nestjs/common';
import { TicketsService } from './services/tickets.service';
import { TicketsController } from './controllers/tickets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evento } from 'src/entities/evento.entity';
import { Usuario } from 'src/entities/usuario.entity';
import { Ticket } from 'src/entities/tickets.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Evento]),
    TypeOrmModule.forFeature([Usuario]),
    TypeOrmModule.forFeature([Ticket]),
  ],
  controllers: [TicketsController],
  providers: [TicketsService],
})
export class TicketsModule {}
