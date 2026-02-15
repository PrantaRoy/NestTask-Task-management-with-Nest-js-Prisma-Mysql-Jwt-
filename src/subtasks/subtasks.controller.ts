import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, SetMetadata } from '@nestjs/common';
import { SubtasksService } from './subtasks.service';
import { CreateSubtaskDto } from './dto/create-subtask.dto';
import { UpdateSubtaskDto } from './dto/update-subtask.dto';
import { RolesGuard } from '../auth/roles.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

// Custom decorator
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

@Controller('subtasks')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SubtasksController {
  constructor(private readonly subtasksService: SubtasksService) { }

  @Post()
  @Roles('MANAGER', 'ADMIN', 'SUPER_ADMIN', 'DEVELOPER')
  create(@Body() createSubtaskDto: CreateSubtaskDto) {
    return this.subtasksService.create(createSubtaskDto);
  }

  @Get()
  findAll() {
    return this.subtasksService.findAll();
  }

  @Get('task/:taskId')
  findByTask(@Param('taskId') taskId: string) {
    return this.subtasksService.findByTask(+taskId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subtasksService.findOne(+id);
  }

  @Patch(':id')
  @Roles('MANAGER', 'ADMIN', 'SUPER_ADMIN', 'DEVELOPER')
  update(@Param('id') id: string, @Body() updateSubtaskDto: UpdateSubtaskDto) {
    return this.subtasksService.update(+id, updateSubtaskDto);
  }

  @Delete(':id')
  @Roles('ADMIN', 'SUPER_ADMIN')
  remove(@Param('id') id: string) {
    return this.subtasksService.remove(+id);
  }
}
