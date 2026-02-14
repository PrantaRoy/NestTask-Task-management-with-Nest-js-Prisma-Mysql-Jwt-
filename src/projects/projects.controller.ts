import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, SetMetadata } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { RolesGuard } from '../auth/roles.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

// Custom decorator to define required roles
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

@Controller('projects')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ProjectsController {
  constructor(private projectsService: ProjectsService) { }

  @Post()
  @Roles('MANAGER', 'ADMIN', 'SUPER_ADMIN')
  create(@Body() createProjectDto: CreateProjectDto, @Request() req) {
    // We rely on the managerId passed in the DTO as per user intent/schema
    return this.projectsService.create(createProjectDto, createProjectDto.managerId);
  }

  @Get()
  findAll() {
    return this.projectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(+id);
  }

  @Patch(':id')
  @Roles('MANAGER', 'ADMIN', 'SUPER_ADMIN')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectsService.update(+id, updateProjectDto);
  }

  @Delete(':id')
  @Roles('ADMIN', 'SUPER_ADMIN')
  remove(@Param('id') id: string) {
    return this.projectsService.remove(+id);
  }
}