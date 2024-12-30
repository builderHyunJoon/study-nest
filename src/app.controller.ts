import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { ResumeService } from './modules/resume/resume.service';
import { CareerDto } from './modules/resume/dto/career.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly resumeService: ResumeService
  ) {}

  @Get("/")
  @Redirect("/resume", 302)
  getRoot(): void {}

  @Get("/resume")
  async getResume(): Promise<CareerDto[]> {
    const careerDtoList = await this.resumeService.getAllCareers();
    console.log("careerDtoList...: ", careerDtoList);
    return careerDtoList;
  }

}
