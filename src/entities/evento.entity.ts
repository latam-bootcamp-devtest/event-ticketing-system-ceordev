import { Column, Entity, OneToMany } from "typeorm";
import { BaseCommonEntity } from "./base.entity";
import { Ticket } from "./tickets.entity";

@Entity('evento')
export class Evento extends BaseCommonEntity {
    @Column()
    nombre: string;

    @Column()
    capacidad: number;

    @Column()
    asientosDisponibles: number;

    @Column({type:'date'})
    fechaEvento: string;

    @OneToMany(() => Ticket, (ticket) => ticket.evento)
    tickets: Ticket[]

}