import { ProjectsService } from './projects.service';
export declare const Roles: (...roles: string[]) => import("@nestjs/common").CustomDecorator<string>;
export declare class ProjectsController {
    private projectsService;
    constructor(projectsService: ProjectsService);
    create(createProjectDto: any, req: any): any;
}
