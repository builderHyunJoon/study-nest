import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { TbVocaWordM } from '../entity/csvjhs.entity';

@Injectable()
export class CsvjhsRepository extends Repository<TbVocaWordM> {
    constructor(private readonly dataSource: DataSource) {
        super(TbVocaWordM, dataSource.createEntityManager());
    }

    async findAll(): Promise<TbVocaWordM[]> {
        return this.find();
    }
}