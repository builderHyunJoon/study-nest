import { IsNumber, IsOptional, IsString, MaxLength, IsNotEmpty } from 'class-validator';

export class CsvDto {

    @IsString()
    @IsNotEmpty()
    jhsHscDs: string;

    @IsString()
    @IsNotEmpty()
    englWord: string;

    @IsString()
    @IsNotEmpty()
    wordDesc: string;

    @IsString()
    @IsNotEmpty()
    wordDesc1: string;

    @IsString()
    @IsNotEmpty()
    wordDesc2: string;

    @IsString()
    @IsNotEmpty()
    wordDesc3: string;
}
