/*
  Warnings:

  - The values [MEMBEROFPARLIAMENT] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'CONTRIBUTOR', 'USER');

-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('MEMBER_OF_PARLIAMENT', 'SENATOR', 'GOVERNOR');
ALTER TABLE "Representative" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
COMMIT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "UserRole" NOT NULL;
