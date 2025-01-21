import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class TbVocaWordH {

    @PrimaryColumn({ length: 255 })
    txbkNm: string;

    @PrimaryColumn()
    wordNo: number;

    @PrimaryColumn({ length: 255 })
    jhsHscDs: string;

    @Column({length: 255})
    englWord: string;

    @Column({length: 255})
    wordDesc: string;

    @Column({length: 255})
    wordDesc1: string;

    @Column({length: 255})
    wordDesc2: string;

    @Column({length: 255})
    wordDesc3: string;
}