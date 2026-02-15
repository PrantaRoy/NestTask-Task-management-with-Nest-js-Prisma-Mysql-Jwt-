"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const client_1 = require("@prisma/client");
let TasksService = class TasksService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createTaskDto) {
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
    async findOne(id) {
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
            throw new common_1.NotFoundException(`Task with ID ${id} not found`);
        }
        return task;
    }
    async update(id, updateTaskDto) {
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
    async remove(id) {
        await this.findOne(id);
        await this.prisma.task.delete({
            where: { id },
        });
        return { message: `Task with ID ${id} has been deleted successfully` };
    }
    async getTasksByStatus(status) {
        const validStatuses = Object.values(client_1.Status);
        if (!validStatuses.includes(status)) {
            throw new common_1.BadRequestException(`Invalid status. Valid values are: ${validStatuses.join(', ')}`);
        }
        const tasks = await this.prisma.task.findMany({
            where: { status: status },
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
    async getTasksByStatusAndProject(status, projectId) {
        const validStatuses = Object.values(client_1.Status);
        if (!validStatuses.includes(status)) {
            throw new common_1.BadRequestException(`Invalid status. Valid values are: ${validStatuses.join(', ')}`);
        }
        const tasks = await this.prisma.task.findMany({
            where: {
                status: status,
                projectId: projectId,
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
            orderBy: {
                id: 'desc',
            },
        });
        return tasks;
    }
    async getTasksByUser(userId) {
        const tasks = await this.prisma.task.findMany({
            where: { assigneeId: userId },
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
    async getTasksByUserAndStatus(userId, status) {
        const validStatuses = Object.values(client_1.Status);
        if (!validStatuses.includes(status)) {
            throw new common_1.BadRequestException(`Invalid status. Valid values are: ${validStatuses.join(', ')}`);
        }
        const tasks = await this.prisma.task.findMany({
            where: {
                assigneeId: userId,
                status: status,
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
            orderBy: {
                id: 'desc',
            },
        });
        return tasks;
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TasksService);
//# sourceMappingURL=tasks.service.js.map