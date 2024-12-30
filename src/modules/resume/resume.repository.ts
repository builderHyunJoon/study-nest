import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CareerEntity } from './entities/career.entity';

@Injectable()
export class ResumeRepository extends Repository<CareerEntity> {
    constructor(private readonly dataSource: DataSource) {
        super(CareerEntity, dataSource.createEntityManager());
    }

    async findAllCareers(): Promise<CareerEntity[]> {
        return this.find();
    }
}