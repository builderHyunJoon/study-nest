import {Injectable} from '@nestjs/common';
import {CsvDto} from "../dto/csv.dto";
import {CsvjhsEntity} from "../entity/csvjhs.entity";
import {CsvhscEntity} from "../entity/csvhsc.entity";
import {CsvjhsRepository} from "../repository/csvjhs.repository";
import {CsvhscRepository} from "../repository/csvhsc.repository";

@Injectable()
export class CsvService {
    constructor(
        private readonly csvjhsRepository: CsvjhsRepository,
        private readonly csvhscRepository: CsvhscRepository
    ) { }

    async getWordList(): Promise<CsvDto[]> {
        const jhsWordList: CsvjhsEntity[] = await this.csvjhsRepository.findAll();
        const jhsDtoList: CsvDto[] = jhsWordList.map((csvjhsEntity: CsvjhsEntity) => ({
            jhsHscDs: csvjhsEntity.jhsHscDs,
            englWord: csvjhsEntity.englWord,
            wordDesc: csvjhsEntity.wordDesc,
            wordDesc1: csvjhsEntity.wordDesc1,
            wordDesc2: csvjhsEntity.wordDesc2,
            wordDesc3: csvjhsEntity.wordDesc3
        }));

        const hscWordList: CsvhscEntity[] = await this.csvhscRepository.findAll();
        const hscDtoList: CsvDto[] = hscWordList.map((csvhscEntity: CsvhscEntity) => ({
            jhsHscDs: csvhscEntity.jhsHscDs,
            englWord: csvhscEntity.englWord,
            wordDesc: csvhscEntity.wordDesc,
            wordDesc1: csvhscEntity.wordDesc1,
            wordDesc2: csvhscEntity.wordDesc2,
            wordDesc3: csvhscEntity.wordDesc3
        }));

        return jhsDtoList.concat(hscDtoList);
    }


}








