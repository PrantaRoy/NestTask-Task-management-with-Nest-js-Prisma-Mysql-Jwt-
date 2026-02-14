import { UsersService } from './users.service';
import { Role } from '@prisma/client';
export declare const Roles: (...roles: string[]) => import("@nestjs/common").CustomDecorator<string>;
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(role?: Role): Promise<{
        id: number;
        full_name: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
    }[]>;
}
