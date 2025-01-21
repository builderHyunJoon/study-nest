import {Controller, Get, Post, Body, Redirect, Res} from '@nestjs/common';
import {AppService} from './app.service';
import {ResumeService} from './modules/resume/resume.service';
import {ElasticService} from './modules/elastic/elastic.service';
import {CsvService} from "./modules/csv/service/csv.service";
import {CareerDto} from './modules/resume/dto/career.dto';
import {ElasticDto} from './modules/elastic/dto/elastic.dto';
import {CsvDto} from "./modules/csv/dto/csv.dto";
import { Response } from 'express';
import { stringify } from 'csv-stringify';
import * as iconv from 'iconv-lite';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly resumeService: ResumeService,
        private readonly elasticService: ElasticService,
        private readonly csvService: CsvService
    ) {
    }

    @Get("/")
    @Redirect("/resume", 302)
    getRoot(): void {
    }

    @Get("/resume")
    async getResume(): Promise<CareerDto[]> {
        const careerDtoList = await this.resumeService.getAllCareers();
        console.log("careerDtoList: ", careerDtoList);
        return careerDtoList;
    }

    @Post("/elastic/search")
    async searchElastic(@Body() elasticDto: ElasticDto): Promise<any> {
        console.log("elasticDto: ", elasticDto);

        if (!elasticDto) {
            return "no query";
        }

        const searchedResult = await this.elasticService.searchElstic(elasticDto);
        console.log("searchedResult: ", searchedResult)
        return searchedResult;
    }

    @Get("/download/csv")
    async downloadCsv(@Res() res: Response): Promise<void> {
        const csvData: CsvDto[] = await this.csvService.getWordList();
        const columns = Object.keys(csvData[0] || {}); // CSV 헤더 동적 생성

        stringify(csvData, { header: true, columns: columns }, (err, output) => {
            if (err) {
                console.error("CSV 생성 오류:", err);
                return res.status(500).send("CSV 생성 오류");
            }
            const encodedOutput = iconv.encode(output, 'euc-kr');
            res.setHeader('Content-Type', 'text/csv; charset=euc-kr');
            res.setHeader('Content-Disposition', 'attachment; filename="word_list.csv"');
            res.send(encodedOutput);
        });
    }

}
