import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ProjectsService {
    constructor(private prisma: PrismaService) { }

    async create(createProjectDto: any, managerId: number) {
        return this.prisma.project.create({
            data: {
                name: createProjectDto.name,
                description: createProjectDto.description,
                managerId,
            },
        });
    }
}
