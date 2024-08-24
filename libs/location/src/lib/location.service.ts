import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { LocationItem, Prisma } from '@prisma/client';

@Injectable()
export class LocationService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.LocationItemCreateInput): Promise<LocationItem> {
    return this.prisma.locationItem.create({ data });
  }

  async findAll(): Promise<LocationItem[]> {
    return this.prisma.locationItem.findMany({
      include: { children: true }, // Include children for hierarchical data
    });
  }

  async findOne(id: number): Promise<LocationItem | null> {
    return this.prisma.locationItem.findUnique({
      where: { id },
      include: { children: true }, // Include children for hierarchical data
    });
  }

  async update(
    id: number,
    data: Prisma.LocationItemUpdateInput
  ): Promise<LocationItem> {
    return this.prisma.locationItem.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<LocationItem> {
    return this.prisma.locationItem.delete({
      where: { id },
    });
  }
}
