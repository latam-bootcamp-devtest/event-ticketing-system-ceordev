import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { TicketsService } from '../services/tickets.service';
import { CreateTicketDto } from 'src/dtos/tickets.dto';

@Controller('tickets')
export class TicketsController {
  constructor(private ticketsService: TicketsService) {}

  @Post()
  async createEvento(@Body() body: CreateTicketDto) {
    return await this.ticketsService.bookTicket(body);
  }

  @Delete(':id')
  async deleteTicket(@Param('id') id: string) {
    return await this.ticketsService.cancelBooking(id)
  }
}
