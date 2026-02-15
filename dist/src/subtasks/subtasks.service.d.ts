import { CreateSubtaskDto } from './dto/create-subtask.dto';
import { UpdateSubtaskDto } from './dto/update-subtask.dto';
import { PrismaService } from '../prisma.service';
export declare class SubtasksService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createSubtaskDto: CreateSubtaskDto): Promise<{
        task: {
            id: number;
            title: string;
            status: import("@prisma/client").$Enums.Status;
        };
    } & {
        id: number;
        title: string;
        status: import("@prisma/client").$Enums.Status;
        assign_date: Date | null;
        due_date: Date | null;
        taskId: number;
    }>;
    findAll(): Promise<({
        task: {
            project: {
                id: number;
                name: string;
            };
        } & {
            id: number;
            title: string;
            projectId: number;
            assigneeId: number | null;
            status: import("@prisma/client").$Enums.Status;
            assign_date: Date | null;
            due_date: Date | null;
        };
    } & {
        id: number;
        title: string;
        status: import("@prisma/client").$Enums.Status;
        assign_date: Date | null;
        due_date: Date | null;
        taskId: number;
    })[]>;
    findOne(id: number): Promise<{
        task: {
            project: {
                id: number;
                name: string;
            };
        } & {
            id: number;
            title: string;
            projectId: number;
            assigneeId: number | null;
            status: import("@prisma/client").$Enums.Status;
            assign_date: Date | null;
            due_date: Date | null;
        };
    } & {
        id: number;
        title: string;
        status: import("@prisma/client").$Enums.Status;
        assign_date: Date | null;
        due_date: Date | null;
        taskId: number;
    }>;
    findByTask(taskId: number): Promise<{
        id: number;
        title: string;
        status: import("@prisma/client").$Enums.Status;
        assign_date: Date | null;
        due_date: Date | null;
        taskId: number;
    }[]>;
    update(id: number, updateSubtaskDto: UpdateSubtaskDto): Promise<{
        task: {
            id: number;
            title: string;
            status: import("@prisma/client").$Enums.Status;
        };
    } & {
        id: number;
        title: string;
        status: import("@prisma/client").$Enums.Status;
        assign_date: Date | null;
        due_date: Date | null;
        taskId: number;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
