import { Controller, Post, Body, UseGuards, Request, SetMetadata } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { RolesGuard } from '../auth/roles.guard';

// Custom decorator to define required roles
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

@Controller('projects')
@UseGuards(RolesGuard) 
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Post()
  @Roles('MANAGER') // Only Managers can hit this endpoint
  create(@Body() createProjectDto: any, @Request() req) {
    return this.projectsService.create(createProjectDto, req.user.sub);
  }
}