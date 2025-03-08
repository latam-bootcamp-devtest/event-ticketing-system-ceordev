import { Column, Entity, OneToMany } from "typeorm";
import { BaseCommonEntity } from "./base.entity";
import { ROL } from "src/enums/roles.enum";
import { Ticket } from "./tickets.entity";

@Entity('usuario')
export class Usuario extends BaseCommonEntity {
    @Column()
    nombre: string;

    @Column()
    materno: string;

    @Column()
    paterno: string;

    @Column({
        type: 'enum',
        enum: ROL,
        default: ROL.USUARIO
    })
    rol: ROL;

    @OneToMany(() => Ticket, (ticket) => ticket.usuario)
    tickets: Ticket[]
}