import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { EventosService } from '../services/eventos.service';
import { CreateEventoDto } from 'src/dtos/eventos.dto';

@Controller('events')
export class EventosController {
  constructor(private eventosService: EventosService) {}

  @Post()
  async createEvento(@Body() body: CreateEventoDto) {
    return await this.eventosService.createEvento(body);
  }

  @Get()
  async getEventos(@Query() page:number, pageSize:number){
    return await this.eventosService.findEventos(page, pageSize);
  }
}
