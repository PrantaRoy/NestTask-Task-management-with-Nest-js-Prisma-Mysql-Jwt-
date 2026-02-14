import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Role } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async findAll(role?: Role) {
        if (role) {
            return this.prisma.user.findMany({
                where: { role },
                select: {
                    id: true,
                    full_name: true,
                    email: true,
                    role: true,
                },
            });
        }
        return this.prisma.user.findMany({
            select: {
                id: true,
                full_name: true,
                email: true,
                role: true,
            },
        });
    }
}
