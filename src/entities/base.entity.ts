import { timestamp } from "rxjs";
import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class BaseCommonEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({type: 'date'})
    createdAt: string;

    @UpdateDateColumn({type: 'date'})
    updatedAt: string;

    @Column({type:'boolean',
        default: true
    })
    estado: Boolean;
}