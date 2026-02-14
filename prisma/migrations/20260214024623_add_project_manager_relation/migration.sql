-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_managerId_fkey` FOREIGN KEY (`managerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
