import {Injectable} from '@nestjs/common';
import {CsvDto} from "../dto/csv.dto";
import {TbVocaWordM} from "../entity/csvjhs.entity";
import {TbVocaWordH} from "../entity/csvhsc.entity";
import {CsvjhsRepository} from "../repository/csvjhs.repository";
import {CsvhscRepository} from "../repository/csvhsc.repository";

@Injectable()
export class CsvService {
    constructor(
        private readonly csvjhsRepository: CsvjhsRepository,
        private readonly csvhscRepository: CsvhscRepository
    ) { }

    async getWordList(): Promise<CsvDto[]> {
        const jhsWordList: TbVocaWordM[] = await this.csvjhsRepository.findAll();
        const jhsDtoList: CsvDto[] = jhsWordList.map((tbVocaWordM: TbVocaWordM) => ({
            jhsHscDs: tbVocaWordM.jhsHscDs,
            englWord: tbVocaWordM.englWord,
            wordDesc: tbVocaWordM.wordDesc,
            wordDesc1: tbVocaWordM.wordDesc1,
            wordDesc2: tbVocaWordM.wordDesc2,
            wordDesc3: tbVocaWordM.wordDesc3
        }));

        const hscWordList: TbVocaWordH[] = await this.csvhscRepository.findAll();
        const hscDtoList: CsvDto[] = hscWordList.map((tbVocaWordH: TbVocaWordH) => ({
            jhsHscDs: tbVocaWordH.jhsHscDs,
            englWord: tbVocaWordH.englWord,
            wordDesc: tbVocaWordH.wordDesc,
            wordDesc1: tbVocaWordH.wordDesc1,
            wordDesc2: tbVocaWordH.wordDesc2,
            wordDesc3: tbVocaWordH.wordDesc3
        }));

        return jhsDtoList.concat(hscDtoList);
    }


}








