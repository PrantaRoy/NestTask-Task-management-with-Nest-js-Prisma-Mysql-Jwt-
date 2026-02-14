import { Controller, Get, Query, UseGuards, SetMetadata } from '@nestjs/common';
import { UsersService } from './users.service';
import { RolesGuard } from '../auth/roles.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Role } from '@prisma/client';

// Custom decorator
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    @Roles('ADMIN', 'SUPER_ADMIN', 'MANAGER') // Adjust access as needed
    findAll(@Query('role') role?: Role) {
        return this.usersService.findAll(role);
    }
}
