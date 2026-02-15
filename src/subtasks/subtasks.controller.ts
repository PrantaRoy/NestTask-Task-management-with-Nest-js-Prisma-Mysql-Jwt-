import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, SetMetadata } from '@nestjs/common';
import { SubtasksService } from './subtasks.service';
import { CreateSubtaskDto } from './dto/create-subtask.dto';
import { UpdateSubtaskDto } from './dto/update-subtask.dto';
import { RolesGuard } from '../auth/roles.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

// Custom decorator
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

@ApiTags('Subtasks')
@ApiBearerAuth()
@Controller('subtasks')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SubtasksController {
  constructor(private readonly subtasksService: SubtasksService) { }

  @ApiOperation({ summary: 'Create a new subtask' })
  @ApiResponse({ status: 201, description: 'The subtask has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Only Managers, Developers and Admins can create subtasks.' })
  @Post()
  @Roles('MANAGER', 'ADMIN', 'SUPER_ADMIN', 'DEVELOPER')
  create(@Body() createSubtaskDto: CreateSubtaskDto) {
    return this.subtasksService.create(createSubtaskDto);
  }

  @ApiOperation({ summary: 'Get all subtasks' })
  @ApiResponse({ status: 200, description: 'Return all subtasks.' })
  @Get()
  findAll() {
    return this.subtasksService.findAll();
  }

  @ApiOperation({ summary: 'Get subtasks for a specific task' })
  @ApiResponse({ status: 200, description: 'Return subtasks for the task.' })
  @Get('task/:taskId')
  findByTask(@Param('taskId') taskId: string) {
    return this.subtasksService.findByTask(+taskId);
  }

  @ApiOperation({ summary: 'Get a subtask by id' })
  @ApiResponse({ status: 200, description: 'Return the subtask.' })
  @ApiResponse({ status: 404, description: 'Subtask not found.' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subtasksService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update a subtask' })
  @ApiResponse({ status: 200, description: 'The subtask has been successfully updated.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Only Managers, Developers and Admins can update subtasks.' })
  @Patch(':id')
  @Roles('MANAGER', 'ADMIN', 'SUPER_ADMIN', 'DEVELOPER')
  update(@Param('id') id: string, @Body() updateSubtaskDto: UpdateSubtaskDto) {
    return this.subtasksService.update(+id, updateSubtaskDto);
  }

  @ApiOperation({ summary: 'Delete a subtask' })
  @ApiResponse({ status: 200, description: 'The subtask has been successfully deleted.' })
  @ApiResponse({ status: 403, description: 'Forbidden. Only Admins can delete subtasks.' })
  @Delete(':id')
  @Roles('ADMIN', 'SUPER_ADMIN')
  remove(@Param('id') id: string) {
    return this.subtasksService.remove(+id);
  }
}
