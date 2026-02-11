export declare enum UserRole {
    ADMIN = "ADMIN",
    MANAGER = "MANAGER",
    DEVELOPER = "DEVELOPER",
    TESTER = "TESTER"
}
export declare class RegisterDto {
    email: string;
    password: string;
    role: UserRole;
}
export declare class LoginDto {
    email: string;
    password: string;
}
