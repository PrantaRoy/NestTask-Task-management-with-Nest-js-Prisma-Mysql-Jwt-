import { PrismaService } from '../prisma.service';
export declare class ProjectsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createProjectDto: any, managerId: number): Promise<{
        id: number;
        name: string;
        description: string;
        managerId: number;
    }>;
}
