import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('tb_voca_word_h')
export class CsvhscEntity {
    @Column()
    jhsHscDs: string;

    @Column({length: 255})
    englWord: string;

    @Column()
    wordDesc: string;

    @Column({length: 255})
    wordDesc1: string;

    @Column()
    wordDesc2: string;

    @Column({length: 255})
    wordDesc3: string;
}