import { IsOptional, IsString, IsNumber, IsObject, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

// Base Query DTOs
class MatchDto {
  [field: string]: string
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
  @IsString()
  gte?: string | number;

  @IsOptional()
  @IsString()
  lte?: string | number;
}

class BoolDto {
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QueryDto)
  must?: QueryDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QueryDto)
  should?: QueryDto[];
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

// Highlight DTO
class HighlightDto {
  @IsOptional()
  @IsObject()
  fields: {
    [key: string]: {
      pre_tags?: string[];
      post_tags?: string[];
    };
  };
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

  @IsOptional()
  @ValidateNested()
  @Type(() => HighlightDto)
  highlight?: HighlightDto;
}
