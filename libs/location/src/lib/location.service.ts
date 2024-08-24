import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { LocationItem, Prisma } from '@prisma/client';

@Injectable()
export class LocationService {
  private readonly logger = new Logger(LocationService.name);

  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.LocationItemCreateInput): Promise<LocationItem> {
    this.logger.log(`Creating a new location: ${JSON.stringify(data)}`);
    return this.prisma.locationItem.create({ data });
  }

  async findAll(): Promise<LocationItem[]> {
    this.logger.log(`Retrieving all locations`);
    return this.prisma.locationItem.findMany({});
  }

  async findOne(id: number): Promise<LocationItem | null> {
    this.logger.log(`Retrieving location with ID: ${id}`);
    return this.prisma.locationItem.findUnique({
      where: { id },
      include: { children: true }, // Include children for hierarchical data
    });
  }

  async update(
    id: number,
    data: Prisma.LocationItemUpdateInput
  ): Promise<LocationItem> {
    this.logger.log(`Updating location with ID: ${id}`);
    return this.prisma.locationItem.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<LocationItem> {
    this.logger.log(`Deleting location with ID: ${id}`);

    return this.prisma.locationItem.delete({
      where: { id },
    });
  }
}
