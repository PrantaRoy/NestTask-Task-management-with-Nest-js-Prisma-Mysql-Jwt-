import { AuthService } from './auth.service';
import { RegisterDto, LoginDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<{
        id: number;
        full_name: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
    }>;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        user: {
            id: number;
            email: string;
            full_name: string;
            role: import("@prisma/client").$Enums.Role;
        };
    }>;
    getProfile(req: any): Promise<{
        id: number;
        full_name: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
    }>;
}
