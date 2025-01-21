import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CsvService} from "../service/csv.service";
import { CsvjhsRepository} from "../repository/csvjhs.repository";
import { CsvhscRepository} from "../repository/csvhsc.repository";
import { TbVocaWordM } from "../entity/csvjhs.entity";
import { TbVocaWordH } from "../entity/csvhsc.entity";
import { CsvDto} from "../dto/csv.dto";


@Module({
    imports: [TypeOrmModule.forFeature([TbVocaWordM, TbVocaWordH])],
    providers: [CsvService, CsvjhsRepository, CsvhscRepository, CsvDto],
    exports: [CsvService, CsvjhsRepository, CsvhscRepository, CsvDto]
})

export class CsvModule { }