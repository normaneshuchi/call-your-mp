/*
  Warnings:

  - You are about to drop the column `constituencyId` on the `Representative` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Constituency` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `County` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `areaOfRepId` to the `Representative` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusId` to the `business` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Constituency" DROP CONSTRAINT "Constituency_countryId_fkey";

-- DropForeignKey
ALTER TABLE "Constituency" DROP CONSTRAINT "Constituency_countyId_fkey";

-- DropForeignKey
ALTER TABLE "County" DROP CONSTRAINT "County_countryId_fkey";

-- DropForeignKey
ALTER TABLE "Representative" DROP CONSTRAINT "Representative_constituencyId_fkey";

-- DropForeignKey
ALTER TABLE "Representative" DROP CONSTRAINT "Representative_countyId_fkey";

-- DropIndex
DROP INDEX "Representative_constituencyId_key";

-- AlterTable
ALTER TABLE "Representative" DROP COLUMN "constituencyId",
ADD COLUMN     "areaOfRepId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "image";

-- AlterTable
ALTER TABLE "business" ADD COLUMN     "statusId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Constituency";

-- DropTable
DROP TABLE "County";

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AreaOfRepresentation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "parentAreaId" TEXT,
    "countryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AreaOfRepresentation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RepTenure" (
    "id" TEXT NOT NULL,
    "representativeId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RepTenure_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RepReviews" (
    "id" TEXT NOT NULL,
    "repTenureId" TEXT NOT NULL,
    "reviewerId" TEXT NOT NULL,

    CONSTRAINT "RepReviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BusinessStatus" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BusinessStatus_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "AreaOfRepresentation_id_key" ON "AreaOfRepresentation"("id");

-- CreateIndex
CREATE INDEX "AreaOfRepresentation_name_countryId_idx" ON "AreaOfRepresentation"("name", "countryId");

-- CreateIndex
CREATE INDEX "Country_name_idx" ON "Country"("name");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AreaOfRepresentation" ADD CONSTRAINT "AreaOfRepresentation_parentAreaId_fkey" FOREIGN KEY ("parentAreaId") REFERENCES "AreaOfRepresentation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AreaOfRepresentation" ADD CONSTRAINT "AreaOfRepresentation_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepTenure" ADD CONSTRAINT "RepTenure_representativeId_fkey" FOREIGN KEY ("representativeId") REFERENCES "Representative"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepReviews" ADD CONSTRAINT "RepReviews_repTenureId_fkey" FOREIGN KEY ("repTenureId") REFERENCES "RepTenure"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepReviews" ADD CONSTRAINT "RepReviews_reviewerId_fkey" FOREIGN KEY ("reviewerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Representative" ADD CONSTRAINT "Representative_areaOfRepId_fkey" FOREIGN KEY ("areaOfRepId") REFERENCES "AreaOfRepresentation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business" ADD CONSTRAINT "business_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "BusinessStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
