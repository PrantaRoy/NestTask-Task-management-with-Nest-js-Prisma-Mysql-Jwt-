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
        id: number;
        title: string;
        projectId: number;
        assigneeId: number | null;
        status: import("@prisma/client").$Enums.Status;
        assign_date: Date | null;
        due_date: Date | null;
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
            id: number;
            title: string;
            status: import("@prisma/client").$Enums.Status;
            assign_date: Date | null;
            due_date: Date | null;
            taskId: number;
        }[];
    } & {
        id: number;
        title: string;
        projectId: number;
        assigneeId: number | null;
        status: import("@prisma/client").$Enums.Status;
        assign_date: Date | null;
        due_date: Date | null;
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
            id: number;
            title: string;
            status: import("@prisma/client").$Enums.Status;
            assign_date: Date | null;
            due_date: Date | null;
            taskId: number;
        }[];
    } & {
        id: number;
        title: string;
        projectId: number;
        assigneeId: number | null;
        status: import("@prisma/client").$Enums.Status;
        assign_date: Date | null;
        due_date: Date | null;
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
            id: number;
            title: string;
            status: import("@prisma/client").$Enums.Status;
            assign_date: Date | null;
            due_date: Date | null;
            taskId: number;
        }[];
    } & {
        id: number;
        title: string;
        projectId: number;
        assigneeId: number | null;
        status: import("@prisma/client").$Enums.Status;
        assign_date: Date | null;
        due_date: Date | null;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
    getTasksByStatus(status: string): Promise<({
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
            id: number;
            title: string;
            status: import("@prisma/client").$Enums.Status;
            assign_date: Date | null;
            due_date: Date | null;
            taskId: number;
        }[];
    } & {
        id: number;
        title: string;
        projectId: number;
        assigneeId: number | null;
        status: import("@prisma/client").$Enums.Status;
        assign_date: Date | null;
        due_date: Date | null;
    })[]>;
    getTasksByStatusAndProject(status: string, projectId: number): Promise<({
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
            id: number;
            title: string;
            status: import("@prisma/client").$Enums.Status;
            assign_date: Date | null;
            due_date: Date | null;
            taskId: number;
        }[];
    } & {
        id: number;
        title: string;
        projectId: number;
        assigneeId: number | null;
        status: import("@prisma/client").$Enums.Status;
        assign_date: Date | null;
        due_date: Date | null;
    })[]>;
    getTasksByUser(userId: number): Promise<({
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
            id: number;
            title: string;
            status: import("@prisma/client").$Enums.Status;
            assign_date: Date | null;
            due_date: Date | null;
            taskId: number;
        }[];
    } & {
        id: number;
        title: string;
        projectId: number;
        assigneeId: number | null;
        status: import("@prisma/client").$Enums.Status;
        assign_date: Date | null;
        due_date: Date | null;
    })[]>;
    getTasksByUserAndStatus(userId: number, status: string): Promise<({
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
            id: number;
            title: string;
            status: import("@prisma/client").$Enums.Status;
            assign_date: Date | null;
            due_date: Date | null;
            taskId: number;
        }[];
    } & {
        id: number;
        title: string;
        projectId: number;
        assigneeId: number | null;
        status: import("@prisma/client").$Enums.Status;
        assign_date: Date | null;
        due_date: Date | null;
    })[]>;
}
