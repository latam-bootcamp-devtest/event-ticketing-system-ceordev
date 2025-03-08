import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { EventosModule } from './eventos/eventos.module';
import { TicketsModule } from './tickets/tickets.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'tickets',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsuariosModule,
    EventosModule,
    TicketsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
