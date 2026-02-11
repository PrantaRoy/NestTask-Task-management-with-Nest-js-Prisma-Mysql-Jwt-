import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import * as bcrypt from 'bcrypt';

const connectionString = process.env.DATABASE_URL || '';
const adapter = new PrismaMariaDb(connectionString);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('🌱 Starting database seed...');

    // Check if super admin already exists
    const existingSuperAdmin = await prisma.user.findFirst({
        where: { role: 'SUPER_ADMIN' },
    });

    if (existingSuperAdmin) {
        console.log('✅ Super admin already exists:', existingSuperAdmin.email);
        return;
    }

    // Hash the default password
    const hashedPassword = await bcrypt.hash('Admin@123', 10);

    // Create super admin user
    const superAdmin = await prisma.user.create({
        data: {
            full_name: 'Super Admin',
            email: 'admin@nesttask.com',
            password: hashedPassword,
            role: 'SUPER_ADMIN',
        },
    });

    console.log('✅ Super admin created successfully!');
    console.log('📧 Email:', superAdmin.email);
    console.log('🔑 Password: Admin@123');
    console.log('👤 Role:', superAdmin.role);
}

main()
    .catch((e) => {
        console.error('❌ Error seeding database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
