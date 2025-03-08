import { Module } from '@nestjs/common';
import { UsuariosController } from './controllers/usuarios.controller';
import { UsuariosService } from './services/usuarios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [UsuariosController],
  providers: [UsuariosService]
})
export class UsuariosModule {}
