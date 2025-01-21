import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CsvjhsEntity } from '../entity/csvjhs.entity';

@Injectable()
export class CsvjhsRepository extends Repository<CsvjhsEntity> {
    constructor(private readonly dataSource: DataSource) {
        super(CsvjhsEntity, dataSource.createEntityManager());
    }

    async findAll(): Promise<CsvjhsEntity[]> {
        return this.find();
    }
}