import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from '../prisma.service';
export declare class TasksService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTaskDto: CreateTaskDto): Promise<{
        project: {
            id: number;
            name: string;
        };
        assignee: {
            id: number;
            full_name: string;
            email: string;
        } | null;
    } & {
        title: string;
        status: import("@prisma/client").$Enums.Status;
        assign_date: Date | null;
        due_date: Date | null;
        id: number;
        projectId: number;
        assigneeId: number | null;
    }>;
    findAll(): Promise<({
        project: {
            id: number;
            name: string;
        };
        assignee: {
            id: number;
            full_name: string;
            email: string;
        } | null;
        subtasks: {
            title: string;
            status: import("@prisma/client").$Enums.Status;
            assign_date: Date | null;
            due_date: Date | null;
            id: number;
            taskId: number;
        }[];
    } & {
        title: string;
        status: import("@prisma/client").$Enums.Status;
        assign_date: Date | null;
        due_date: Date | null;
        id: number;
        projectId: number;
        assigneeId: number | null;
    })[]>;
    findOne(id: number): Promise<{
        project: {
            id: number;
            name: string;
        };
        assignee: {
            id: number;
            full_name: string;
            email: string;
        } | null;
        subtasks: {
            title: string;
            status: import("@prisma/client").$Enums.Status;
            assign_date: Date | null;
            due_date: Date | null;
            id: number;
            taskId: number;
        }[];
    } & {
        title: string;
        status: import("@prisma/client").$Enums.Status;
        assign_date: Date | null;
        due_date: Date | null;
        id: number;
        projectId: number;
        assigneeId: number | null;
    }>;
    update(id: number, updateTaskDto: UpdateTaskDto): Promise<{
        project: {
            id: number;
            name: string;
        };
        assignee: {
            id: number;
            full_name: string;
            email: string;
        } | null;
        subtasks: {
            title: string;
            status: import("@prisma/client").$Enums.Status;
            assign_date: Date | null;
            due_date: Date | null;
            id: number;
            taskId: number;
        }[];
    } & {
        title: string;
        status: import("@prisma/client").$Enums.Status;
        assign_date: Date | null;
        due_date: Date | null;
        id: number;
        projectId: number;
        assigneeId: number | null;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
