import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubtaskDto } from './dto/create-subtask.dto';
import { UpdateSubtaskDto } from './dto/update-subtask.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SubtasksService {
  constructor(private prisma: PrismaService) { }

  async create(createSubtaskDto: CreateSubtaskDto) {
    const { assign_date, due_date, ...rest } = createSubtaskDto;

    // Check if the parent task exists
    const task = await this.prisma.task.findUnique({
      where: { id: createSubtaskDto.taskId },
    });

    if (!task) {
      throw new NotFoundException(`Task with ID ${createSubtaskDto.taskId} not found`);
    }

    const subtask = await this.prisma.subtask.create({
      data: {
        ...rest,
        assign_date: assign_date ? new Date(assign_date) : null,
        due_date: due_date ? new Date(due_date) : null,
      },
      include: {
        task: {
          select: {
            id: true,
            title: true,
            status: true,
          },
        },
      },
    });

    return subtask;
  }

  async findAll() {
    const subtasks = await this.prisma.subtask.findMany({
      include: {
        task: {
          include: {
            project: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
      orderBy: {
        id: 'desc',
      },
    });

    return subtasks;
  }

  async findOne(id: number) {
    const subtask = await this.prisma.subtask.findUnique({
      where: { id },
      include: {
        task: {
          include: {
            project: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    if (!subtask) {
      throw new NotFoundException(`Subtask with ID ${id} not found`);
    }

    return subtask;
  }

  async findByTask(taskId: number) {
    const subtasks = await this.prisma.subtask.findMany({
      where: { taskId },
      orderBy: {
        id: 'desc',
      },
    });

    return subtasks;
  }

  async update(id: number, updateSubtaskDto: UpdateSubtaskDto) {
    // First check if subtask exists
    await this.findOne(id);

    const { assign_date, due_date, ...rest } = updateSubtaskDto;

    const subtask = await this.prisma.subtask.update({
      where: { id },
      data: {
        ...rest,
        assign_date: assign_date ? new Date(assign_date) : undefined,
        due_date: due_date ? new Date(due_date) : undefined,
      },
      include: {
        task: {
          select: {
            id: true,
            title: true,
            status: true,
          },
        },
      },
    });

    return subtask;
  }

  async remove(id: number) {
    // First check if subtask exists
    await this.findOne(id);

    await this.prisma.subtask.delete({
      where: { id },
    });

    return { message: `Subtask with ID ${id} has been deleted successfully` };
  }
}
