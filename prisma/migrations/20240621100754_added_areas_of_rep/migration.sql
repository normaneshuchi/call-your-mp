/*
  Warnings:

  - You are about to drop the `Business` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Business" DROP CONSTRAINT "Business_verifiedBy_fkey";

-- DropForeignKey
ALTER TABLE "_BusinessToBusinessSector" DROP CONSTRAINT "_BusinessToBusinessSector_A_fkey";

-- DropForeignKey
ALTER TABLE "_BusinessToRepresentative" DROP CONSTRAINT "_BusinessToRepresentative_A_fkey";

-- DropTable
DROP TABLE "Business";

-- CreateTable
CREATE TABLE "business" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "twitter" TEXT NOT NULL,
    "facebook" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "verifiedBy" TEXT NOT NULL,
    "foundedIn" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "business_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "business_name_description_website_twitter_facebook_instagra_idx" ON "business"("name", "description", "website", "twitter", "facebook", "instagram", "createdAt", "updatedAt");

-- AddForeignKey
ALTER TABLE "business" ADD CONSTRAINT "business_verifiedBy_fkey" FOREIGN KEY ("verifiedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BusinessToRepresentative" ADD CONSTRAINT "_BusinessToRepresentative_A_fkey" FOREIGN KEY ("A") REFERENCES "business"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BusinessToBusinessSector" ADD CONSTRAINT "_BusinessToBusinessSector_A_fkey" FOREIGN KEY ("A") REFERENCES "business"("id") ON DELETE CASCADE ON UPDATE CASCADE;
