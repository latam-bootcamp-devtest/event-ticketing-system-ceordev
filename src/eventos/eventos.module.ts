import { Module } from '@nestjs/common';
import { EventosController } from './controllers/eventos.controller';
import { EventosService } from './services/eventos.service';
import { Evento } from 'src/entities/evento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Evento])],
  controllers: [EventosController],
  providers: [EventosService]
})
export class EventosModule {}
