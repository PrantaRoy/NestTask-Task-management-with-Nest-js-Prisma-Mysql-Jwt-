import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, SetMetadata, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { RolesGuard } from '../auth/roles.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Role } from '@prisma/client';

// Custom decorator
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

@Controller('tasks')
@UseGuards(JwtAuthGuard, RolesGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  @Post()
  @Roles('MANAGER', 'ADMIN', 'SUPER_ADMIN')
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  // Flexible Report Route with Query Parameters
  @Get('reports')
  getTasksReport(
    @Query('status') status?: string,
    @Query('projectId') projectId?: string,
    @Query('userId') userId?: string,
  ) {
    // If userId and status are provided
    if (userId && status) {
      return this.tasksService.getTasksByUserAndStatus(+userId, status);
    }
    // If only userId is provided
    if (userId) {
      return this.tasksService.getTasksByUser(+userId);
    }
    // If status and projectId are provided
    if (status && projectId) {
      return this.tasksService.getTasksByStatusAndProject(status, +projectId);
    }
    // If only status is provided
    if (status) {
      return this.tasksService.getTasksByStatus(status);
    }
    // If no filters, return all tasks
    return this.tasksService.findAll();
  }

  // Report Routes - Must come before :id route to avoid conflicts
  @Get('reports/status/:status')
  getTasksByStatus(@Param('status') status: string) {
    return this.tasksService.getTasksByStatus(status);
  }

  @Get('reports/status/:status/project/:projectId')
  getTasksByStatusAndProject(
    @Param('status') status: string,
    @Param('projectId') projectId: string,
  ) {
    return this.tasksService.getTasksByStatusAndProject(status, +projectId);
  }

  @Get('reports/user/:userId')
  getTasksByUser(@Param('userId') userId: string) {
    return this.tasksService.getTasksByUser(+userId);
  }

  @Get('reports/user/:userId/status/:status')
  getTasksByUserAndStatus(
    @Param('userId') userId: string,
    @Param('status') status: string,
  ) {
    return this.tasksService.getTasksByUserAndStatus(+userId, status);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }

  @Patch(':id')
  @Roles('MANAGER', 'ADMIN', 'SUPER_ADMIN')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  @Roles('ADMIN', 'SUPER_ADMIN')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
