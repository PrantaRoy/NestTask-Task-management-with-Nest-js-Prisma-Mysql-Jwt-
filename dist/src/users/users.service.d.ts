import { PrismaService } from '../prisma.service';
import { Role } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(role?: Role): Promise<{
        id: number;
        full_name: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
    }[]>;
}
