import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) { }

  async create(createTaskDto: CreateTaskDto) {
    const { assign_date, due_date, ...rest } = createTaskDto;

    const task = await this.prisma.task.create({
      data: {
        ...rest,
        assign_date: assign_date ? new Date(assign_date) : null,
        due_date: due_date ? new Date(due_date) : null,
      },
      include: {
        project: {
          select: {
            id: true,
            name: true,
          },
        },
        assignee: {
          select: {
            id: true,
            full_name: true,
            email: true,
          },
        },
      },
    });

    return task;
  }

  async findAll() {
    const tasks = await this.prisma.task.findMany({
      include: {
        project: {
          select: {
            id: true,
            name: true,
          },
        },
        assignee: {
          select: {
            id: true,
            full_name: true,
            email: true,
          },
        },
        subtasks: true,
      },
      orderBy: {
        id: 'desc',
      },
    });

    return tasks;
  }

  async findOne(id: number) {
    const task = await this.prisma.task.findUnique({
      where: { id },
      include: {
        project: {
          select: {
            id: true,
            name: true,
          },
        },
        assignee: {
          select: {
            id: true,
            full_name: true,
            email: true,
          },
        },
        subtasks: true,
      },
    });

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return task;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    // First check if task exists
    await this.findOne(id);

    const { assign_date, due_date, ...rest } = updateTaskDto;

    const task = await this.prisma.task.update({
      where: { id },
      data: {
        ...rest,
        assign_date: assign_date ? new Date(assign_date) : undefined,
        due_date: due_date ? new Date(due_date) : undefined,
      },
      include: {
        project: {
          select: {
            id: true,
            name: true,
          },
        },
        assignee: {
          select: {
            id: true,
            full_name: true,
            email: true,
          },
        },
        subtasks: true,
      },
    });

    return task;
  }

  async remove(id: number) {
    // First check if task exists
    await this.findOne(id);

    await this.prisma.task.delete({
      where: { id },
    });

    return { message: `Task with ID ${id} has been deleted successfully` };
  }
}

