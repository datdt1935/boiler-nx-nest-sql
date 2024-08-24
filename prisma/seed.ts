import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed root locations
  const buildingA = await prisma.locationItem.create({
    data: {
      building: 'A',
      locationName: 'Main Building',
      locationNumber: 'A-01',
      area: 150.5,
    },
  });

  const lobby = await prisma.locationItem.create({
    data: {
      building: 'A',
      locationName: 'Lobby',
      locationNumber: 'A-01-Lobby',
      area: 80.62,
      parentId: buildingA.id, // Setting hierarchical relationship
    },
  });

  const parking = await prisma.locationItem.create({
    data: {
      building: 'A',
      locationName: 'Parking Lot',
      locationNumber: 'A-02-Parking',
      area: 120.3,
      parentId: buildingA.id, // Setting hierarchical relationship
    },
  });

  // Add more seed data as necessary
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
