import { Injectable } from '@nestjs/common';
import { CareerDto } from './dto/career.dto';
import { CareerEntity } from './entities/career.entity';
import { ResumeRepository } from './resume.repository';

@Injectable()
export class ResumeService {
    constructor(private readonly resumeRepository: ResumeRepository) { }

    async getAllCareers(): Promise<CareerDto[]> {
        const careers = await this.resumeRepository.findAllCareers();
        return careers.map((career) => ({
            careerIdx: career.careerIdx,
            careerPeriod: career.careerPeriod,
            careerOrganization: career.careerOrganization,
            careerTitle: career.careerTitle,
            careerExplain: career.careerExplain,
        }));
    }
}
