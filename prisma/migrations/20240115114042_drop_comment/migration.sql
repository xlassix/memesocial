/*
  Warnings:

  - You are about to drop the column `profileDiscription` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the `Comments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Comments` DROP FOREIGN KEY `Comments_accountAddress_fkey`;

-- DropForeignKey
ALTER TABLE `Comments` DROP FOREIGN KEY `Comments_filesFileId_fkey`;

-- AlterTable
ALTER TABLE `Account` RENAME COLUMN `profileDiscription`
    to `profileDescription`,
    MODIFY `avatar` VARCHAR(191) NULL DEFAULT 'https://gateway.lighthouse.storage/ipfs/QmanFHjUQXbpgg8vC86np7WcyNDxnVJTsrK3NjZePQjGzM';

-- DropTable
DROP TABLE `Comments`;
