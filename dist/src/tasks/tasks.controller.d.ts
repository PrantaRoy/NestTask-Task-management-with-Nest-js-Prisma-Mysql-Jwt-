import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare const Roles: (...roles: string[]) => import("@nestjs/common").CustomDecorator<string>;
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
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
    getTasksReport(status?: string, projectId?: string, userId?: string): Promise<({
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
    getTasksByStatusAndProject(status: string, projectId: string): Promise<({
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
    getTasksByUser(userId: string): Promise<({
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
    getTasksByUserAndStatus(userId: string, status: string): Promise<({
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
    findOne(id: string): Promise<{
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
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<{
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
    remove(id: string): Promise<{
        message: string;
    }>;
}
