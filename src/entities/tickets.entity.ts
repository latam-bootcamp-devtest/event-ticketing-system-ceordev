import { Column, Entity, ManyToOne } from "typeorm";
import { BaseCommonEntity } from "./base.entity";
import { ROL } from "src/enums/roles.enum";
import { Usuario } from "./usuario.entity";
import { Evento } from "./evento.entity";

@Entity('ticket')
export class Ticket extends BaseCommonEntity {
    
    @ManyToOne(() => Usuario, (usuario) => usuario.tickets)
    usuario: Usuario;

    @ManyToOne(() => Evento, (evento) => evento.tickets)
    evento: Evento;

    @Column({type: 'date'})
    fechaCompra: string;

    @Column({
        type: 'boolean',
        default: false
    })
    devuelto: Boolean;
}