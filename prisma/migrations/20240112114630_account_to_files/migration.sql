-- AddForeignKey
ALTER TABLE `files` ADD CONSTRAINT `files_creator_fkey` FOREIGN KEY (`creator`) REFERENCES `Account`(`address`) ON DELETE RESTRICT ON UPDATE CASCADE;
