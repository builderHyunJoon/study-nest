import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('career_info')
export class CareerEntity {
    @PrimaryGeneratedColumn()
    careerIdx: number;

    @Column({length: 255})
    careerPeriod: string;

    @Column({length: 255})
    careerOrganization: string;

    @Column({length: 255})
    careerTitle: string;

    @Column('text')
    careerExplain: string;

    @CreateDateColumn()
    createdAt: Date;
}