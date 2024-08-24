import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLocationDto {
  @ApiProperty({ description: 'The building name', example: 'A' })
  @IsString()
  @IsNotEmpty()
  building!: string;

  @ApiProperty({ description: 'The location name', example: 'Lobby' })
  @IsString()
  @IsNotEmpty()
  locationName!: string;

  @ApiProperty({ description: 'The location number', example: 'A-01-Lobby' })
  @IsString()
  @IsNotEmpty()
  locationNumber!: string;

  @ApiProperty({ description: 'The area in square meters', example: 80.62 })
  @IsNumber()
  @IsNotEmpty()
  area!: number;

  @ApiProperty({
    description: 'The ID of the parent location (if any)',
    example: 1,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  parentId?: number;
}
