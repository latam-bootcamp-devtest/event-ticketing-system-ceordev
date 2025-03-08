import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsuarioDto } from 'src/dtos/usuarios.dto';
import { Usuario } from 'src/entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>,
      ) {}
    
      async createUsuario(usuario: CreateUsuarioDto) {
        const checkUsuario = await this.usuarioRepository.find({
          where: [{ nombre: usuario.nombre }, { paterno: usuario.paterno }],
        });
    
        if (checkUsuario.length === 0) {
          const newUsuario = await this.usuarioRepository.create(usuario);
          const createdUsuario = await this.usuarioRepository.save(newUsuario);
    
          return {
            eventId: createdUsuario.id,
            name: createdUsuario.nombre + ' ' + createdUsuario.paterno + ' ' +createdUsuario.materno,
            date: createdUsuario.rol,
          };
        } else {
          throw new HttpException(
            {
              error: 'existe el usuario',
            },
            HttpStatus.CONFLICT,
          );
        }
      }
}
