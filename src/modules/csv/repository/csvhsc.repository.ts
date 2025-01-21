import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { TbVocaWordH } from '../entity/csvhsc.entity';

@Injectable()
export class CsvhscRepository extends Repository<TbVocaWordH> {
    constructor(private readonly dataSource: DataSource) {
        super(TbVocaWordH, dataSource.createEntityManager());
    }

    async findAll(): Promise<TbVocaWordH[]> {
        return this.find();
    }
}