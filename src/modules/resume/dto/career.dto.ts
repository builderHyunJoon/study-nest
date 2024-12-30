import { IsNumber, IsOptional, IsString, MaxLength, IsNotEmpty } from 'class-validator';

export class CareerDto {

  @IsNumber()
  @IsOptional()
  careerIdx?: number;
    
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  careerPeriod: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  careerOrganization: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  careerTitle: string;

  @IsString()
  @IsNotEmpty()
  careerExplain: string;
}
