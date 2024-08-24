-- CreateTable
CREATE TABLE "LocationItem" (
    "id" SERIAL NOT NULL,
    "building" TEXT NOT NULL,
    "locationName" TEXT NOT NULL,
    "locationNumber" TEXT NOT NULL,
    "area" DOUBLE PRECISION NOT NULL,
    "parentId" INTEGER,

    CONSTRAINT "LocationItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LocationItem" ADD CONSTRAINT "LocationItem_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "LocationItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
