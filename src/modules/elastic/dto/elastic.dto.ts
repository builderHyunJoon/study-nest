import { IsOptional, IsString, IsNumber, IsObject, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

// Base Query DTOs
class MatchDto {
  @IsString()
  message: string;
}

class TermDto {
  @IsString()
  field: string;

  @IsString()
  value: string;
}

class RangeDto {
  @IsString()
  field: string;

  @IsOptional()
  @IsNumber()
  gte?: number;

  @IsOptional()
  @IsNumber()
  lte?: number;
}

class BoolDto {
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MatchDto)
  must?: MatchDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MatchDto)
  should?: MatchDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MatchDto)
  must_not?: MatchDto[];
}

// Aggregations
class AggregationsDto {
  @IsOptional()
  @IsObject()
  terms?: {
    field: string;
    size?: number;
  };

  @IsOptional()
  @IsObject()
  range?: RangeDto;
}

// Main Query DTO
class QueryDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => MatchDto)
  match?: MatchDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => TermDto)
  term?: TermDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => RangeDto)
  range?: RangeDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => BoolDto)
  bool?: BoolDto;
}

// Top-level DTO
export class ElasticDto {
  @ValidateNested()
  @Type(() => QueryDto)
  query: QueryDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => AggregationsDto)
  aggs?: AggregationsDto;

  @IsOptional()
  @IsNumber()
  from?: number;

  @IsOptional()
  @IsNumber()
  size?: number;

  @IsOptional()
  @IsString()
  sort?: string;
}
