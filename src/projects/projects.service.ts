import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
    constructor(private prisma: PrismaService) { }

    async create(createProjectDto: CreateProjectDto, managerId: number) {
        return this.prisma.project.create({
            data: {
                name: createProjectDto.name,
                description: createProjectDto.description,
                managerId,
            },
        });
    }

    async findAll() {
        return this.prisma.project.findMany({
            include: {
                manager: true,
                tasks: {
                    include: {
                        assignee: true,
                    },
                },
            },
        });
    }

    async findOne(id: number) {
        const project = await this.prisma.project.findUnique({
            where: { id },
            include: {
                manager: true,
                tasks: {
                    include: {
                        assignee: true,
                    },
                },
            },
        });
        if (!project) {
            throw new NotFoundException(`Project with ID ${id} not found`);
        }
        return project;
    }

    async update(id: number, updateProjectDto: UpdateProjectDto) {
        await this.findOne(id); // Ensure exists
        return this.prisma.project.update({
            where: { id },
            data: updateProjectDto,
        });
    }

    async remove(id: number) {
        await this.findOne(id); // Ensure exists
        return this.prisma.project.delete({
            where: { id },
        });
    }
}
