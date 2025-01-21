import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CsvhscEntity } from '../entity/csvhsc.entity';

@Injectable()
export class CsvhscRepository extends Repository<CsvhscEntity> {
    constructor(private readonly dataSource: DataSource) {
        super(CsvhscEntity, dataSource.createEntityManager());
    }

    async findAll(): Promise<CsvhscEntity[]> {
        return this.find();
    }
}