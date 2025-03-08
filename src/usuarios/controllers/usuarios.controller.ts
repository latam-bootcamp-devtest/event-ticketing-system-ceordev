import { Body, Controller, Post } from '@nestjs/common';
import { UsuariosService } from '../services/usuarios.service';
import { CreateUsuarioDto } from 'src/dtos/usuarios.dto';

@Controller('users')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  @Post()
  async createUser(@Body() body: CreateUsuarioDto) {
    return await this.usuariosService.createUsuario(body);
  }
}
