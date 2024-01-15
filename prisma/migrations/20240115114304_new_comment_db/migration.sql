-- CreateTable
CREATE TABLE `Comments` (
    `id` VARCHAR(191) NOT NULL,
    `message` TEXT NOT NULL,
    `accountAddress` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `filesFileId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Comments` ADD CONSTRAINT `Comments_accountAddress_fkey` FOREIGN KEY (`accountAddress`) REFERENCES `Account`(`address`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comments` ADD CONSTRAINT `Comments_filesFileId_fkey` FOREIGN KEY (`filesFileId`) REFERENCES `files`(`fileId`) ON DELETE RESTRICT ON UPDATE CASCADE;
