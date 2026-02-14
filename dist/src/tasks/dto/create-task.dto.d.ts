import { Status } from '@prisma/client';
export declare class CreateTaskDto {
    title: string;
    projectId: number;
    assigneeId?: number;
    status?: Status;
    assign_date?: string;
    due_date?: string;
}
