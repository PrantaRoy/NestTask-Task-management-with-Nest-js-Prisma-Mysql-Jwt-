import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma.service';
import { RegisterDto, LoginDto } from './dto/auth.dto';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(dto: RegisterDto): Promise<{
        id: number;
        full_name: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
    }>;
    login(dto: LoginDto): Promise<{
        access_token: string;
        user: {
            id: number;
            email: string;
            full_name: string;
            role: import("@prisma/client").$Enums.Role;
        };
    }>;
    getProfile(userId: number): Promise<{
        id: number;
        full_name: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
    }>;
}
