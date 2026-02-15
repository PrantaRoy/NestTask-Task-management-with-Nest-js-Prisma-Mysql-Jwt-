import { Status } from '@prisma/client';
export declare class CreateSubtaskDto {
    title: string;
    taskId: number;
    status?: Status;
    assign_date?: string;
    due_date?: string;
}
