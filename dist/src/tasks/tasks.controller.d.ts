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
    remove(id: string): Promise<{
        message: string;
    }>;
}
