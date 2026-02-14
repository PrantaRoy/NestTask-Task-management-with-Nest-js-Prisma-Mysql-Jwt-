-- AlterTable
ALTER TABLE `Subtask` ADD COLUMN `assign_date` DATETIME(3) NULL,
    ADD COLUMN `due_date` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Task` ADD COLUMN `assign_date` DATETIME(3) NULL,
    ADD COLUMN `due_date` DATETIME(3) NULL;
