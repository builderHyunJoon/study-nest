import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResumeService } from './resume.service';
import { ResumeRepository } from './resume.repository';
import { CareerDto } from './dto/career.dto';
import { CareerEntity } from './entities/career.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CareerEntity])],
    providers: [ResumeService, ResumeRepository, CareerDto],
    exports: [ResumeService, ResumeRepository, CareerDto]
})

export class ResumeModule { }