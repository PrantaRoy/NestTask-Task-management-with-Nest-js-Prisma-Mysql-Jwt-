import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, SetMetadata, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { RolesGuard } from '../auth/roles.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';

// Custom decorator
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

@ApiTags('Tasks')
@ApiBearerAuth()
@Controller('tasks')
@UseGuards(JwtAuthGuard, RolesGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  @ApiOperation({ summary: 'Create a new task' })
  @ApiResponse({ status: 201, description: 'The task has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Only Managers and Admins can create tasks.' })
  @Post()
  @Roles('MANAGER', 'ADMIN', 'SUPER_ADMIN')
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ status: 200, description: 'Return all tasks.' })
  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  // Flexible Report Route with Query Parameters
  @ApiOperation({ summary: 'Get tasks report with filters' })
  @ApiQuery({ name: 'status', required: false, description: 'Filter by task status (PENDING, IN_PROGRESS, COMPLETED, REJECTED)' })
  @ApiQuery({ name: 'projectId', required: false, description: 'Filter by project ID' })
  @ApiQuery({ name: 'userId', required: false, description: 'Filter by user ID' })
  @ApiResponse({ status: 200, description: 'Return filtered tasks.' })
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
  @ApiOperation({ summary: 'Get tasks by status' })
  @ApiResponse({ status: 200, description: 'Return tasks with specific status.' })
  @Get('reports/status/:status')
  getTasksByStatus(@Param('status') status: string) {
    return this.tasksService.getTasksByStatus(status);
  }

  @ApiOperation({ summary: 'Get tasks by status and project' })
  @ApiResponse({ status: 200, description: 'Return tasks with specific status and project.' })
  @Get('reports/status/:status/project/:projectId')
  getTasksByStatusAndProject(
    @Param('status') status: string,
    @Param('projectId') projectId: string,
  ) {
    return this.tasksService.getTasksByStatusAndProject(status, +projectId);
  }

  @ApiOperation({ summary: 'Get tasks by user' })
  @ApiResponse({ status: 200, description: 'Return tasks assigned to user.' })
  @Get('reports/user/:userId')
  getTasksByUser(@Param('userId') userId: string) {
    return this.tasksService.getTasksByUser(+userId);
  }

  @ApiOperation({ summary: 'Get tasks by user and status' })
  @ApiResponse({ status: 200, description: 'Return tasks assigned to user with specific status.' })
  @Get('reports/user/:userId/status/:status')
  getTasksByUserAndStatus(
    @Param('userId') userId: string,
    @Param('status') status: string,
  ) {
    return this.tasksService.getTasksByUserAndStatus(+userId, status);
  }

  @ApiOperation({ summary: 'Get a task by id' })
  @ApiResponse({ status: 200, description: 'Return the task.' })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update a task' })
  @ApiResponse({ status: 200, description: 'The task has been successfully updated.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Only Managers and Admins can update tasks.' })
  @Patch(':id')
  @Roles('MANAGER', 'ADMIN', 'SUPER_ADMIN')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @ApiOperation({ summary: 'Delete a task' })
  @ApiResponse({ status: 200, description: 'The task has been successfully deleted.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Only Admins can delete tasks.' })
  @Delete(':id')
  @Roles('ADMIN', 'SUPER_ADMIN')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
