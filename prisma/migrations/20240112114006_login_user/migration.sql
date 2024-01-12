-- AlterTable
ALTER TABLE `files` ADD COLUMN `creator` VARCHAR(191) NOT NULL DEFAULT '0xd79361b5e34066d723782553780dfd4aa23860b7',
    ADD COLUMN `downloadCount` INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE `Account` (
    `address` VARCHAR(191) NOT NULL,
    `joinedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `lastSeen` DATETIME(3) NOT NULL,
    `avatar` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `username` VARCHAR(191) NULL,
    `twitter` VARCHAR(191) NULL,
    `instagram` VARCHAR(191) NULL,
    `tiktok` VARCHAR(191) NULL,
    `profileDiscription` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `authMethod` VARCHAR(191) NULL,
    `smartWallet` VARCHAR(191) NULL,

    PRIMARY KEY (`address`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO `Account` ( `address`,`lastSeen`)
VALUES ('0xd79361b5e34066d723782553780dfd4aa23860b7', STR_TO_DATE('2024-01-12T11:24:38.255Z', '%Y-%m-%dT%H:%i:%s.%fZ'));

-- CreateTable
CREATE TABLE `Comments` (
    `id` VARCHAR(191) NOT NULL,
    `message` BOOLEAN NOT NULL DEFAULT true,
    `accountAddress` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `filesFileId` VARCHAR(191) NULL,

    UNIQUE INDEX `Comments_accountAddress_filesFileId_key`(`accountAddress`, `filesFileId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LikedFiles` (
    `id` VARCHAR(191) NOT NULL,
    `isLiked` BOOLEAN NOT NULL DEFAULT true,
    `accountAddress` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `filesFileId` VARCHAR(191) NULL,

    UNIQUE INDEX `LikedFiles_accountAddress_filesFileId_key`(`accountAddress`, `filesFileId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `files_creator_idx` ON `files`(`creator`);

-- AddForeignKey
ALTER TABLE `Comments` ADD CONSTRAINT `Comments_accountAddress_fkey` FOREIGN KEY (`accountAddress`) REFERENCES `Account`(`address`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comments` ADD CONSTRAINT `Comments_filesFileId_fkey` FOREIGN KEY (`filesFileId`) REFERENCES `files`(`fileId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LikedFiles` ADD CONSTRAINT `LikedFiles_accountAddress_fkey` FOREIGN KEY (`accountAddress`) REFERENCES `Account`(`address`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LikedFiles` ADD CONSTRAINT `LikedFiles_filesFileId_fkey` FOREIGN KEY (`filesFileId`) REFERENCES `files`(`fileId`) ON DELETE SET NULL ON UPDATE CASCADE;
