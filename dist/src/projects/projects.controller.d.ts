import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare const Roles: (...roles: string[]) => import("@nestjs/common").CustomDecorator<string>;
export declare class ProjectsController {
    private projectsService;
    constructor(projectsService: ProjectsService);
    create(createProjectDto: CreateProjectDto, req: any): Promise<{
        id: number;
        name: string;
        description: string;
        managerId: number;
    }>;
    findAll(): Promise<({
        tasks: ({
            assignee: {
                id: number;
                full_name: string;
                email: string;
                password: string;
                role: import("@prisma/client").$Enums.Role;
            } | null;
        } & {
            id: number;
            title: string;
            projectId: number;
            assigneeId: number | null;
            status: import("@prisma/client").$Enums.Status;
            assign_date: Date | null;
            due_date: Date | null;
        })[];
        manager: {
            id: number;
            full_name: string;
            email: string;
            password: string;
            role: import("@prisma/client").$Enums.Role;
        };
    } & {
        id: number;
        name: string;
        description: string;
        managerId: number;
    })[]>;
    findOne(id: string): Promise<{
        tasks: ({
            assignee: {
                id: number;
                full_name: string;
                email: string;
                password: string;
                role: import("@prisma/client").$Enums.Role;
            } | null;
        } & {
            id: number;
            title: string;
            projectId: number;
            assigneeId: number | null;
            status: import("@prisma/client").$Enums.Status;
            assign_date: Date | null;
            due_date: Date | null;
        })[];
        manager: {
            id: number;
            full_name: string;
            email: string;
            password: string;
            role: import("@prisma/client").$Enums.Role;
        };
    } & {
        id: number;
        name: string;
        description: string;
        managerId: number;
    }>;
    update(id: string, updateProjectDto: UpdateProjectDto): Promise<{
        id: number;
        name: string;
        description: string;
        managerId: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        description: string;
        managerId: number;
    }>;
}
