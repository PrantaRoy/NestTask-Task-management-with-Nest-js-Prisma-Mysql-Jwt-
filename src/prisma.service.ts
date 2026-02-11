import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() {
        // For Prisma 7.x, we need to pass adapter configuration
        const connectionString = process.env.DATABASE_URL || 'mysql://root:54444@localhost:3306/nest_task_pro';
        const adapter = new PrismaMariaDb(connectionString);
        super({ adapter });
    }

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}
