import { Controller, Get, Post, Body, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { ResumeService } from './modules/resume/resume.service';
import { ElasticService } from './modules/elastic/elastic.service';
import { CareerDto } from './modules/resume/dto/career.dto';
import { ElasticDto } from './modules/elastic/dto/elastic.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly resumeService: ResumeService,
    private readonly elasticService: ElasticService
  ) {}

  @Get("/")
  @Redirect("/resume", 302)
  getRoot(): void {}

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

}
