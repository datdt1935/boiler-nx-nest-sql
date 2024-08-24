import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LocationService } from './location.service';
import { Prisma } from '@prisma/client';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateLocationDto } from './dtos/CreateLocationItem.dto';

@ApiTags('locations')
@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @ApiOperation({ summary: 'Create a new location' })
  @ApiResponse({
    status: 201,
    description: 'The location has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @Post()
  create(@Body() createLocationDto: CreateLocationDto) {
    return this.locationService.create(createLocationDto);
  }

  @ApiOperation({ summary: 'Get all locations' })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved locations.',
  })
  @Get()
  findAll() {
    return this.locationService.findAll();
  }

  @ApiOperation({ summary: 'Get a specific location by ID' })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved the location.',
  })
  @ApiResponse({ status: 404, description: 'Location not found.' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.locationService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update a location' })
  @ApiResponse({
    status: 200,
    description: 'Successfully updated the location.',
  })
  @ApiResponse({ status: 404, description: 'Location not found.' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLocationDto: Prisma.LocationItemUpdateInput
  ) {
    return this.locationService.update(+id, updateLocationDto);
  }

  @ApiOperation({ summary: 'Delete a location' })
  @ApiResponse({
    status: 200,
    description: 'Successfully deleted the location.',
  })
  @ApiResponse({ status: 404, description: 'Location not found.' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locationService.remove(+id);
  }
}
