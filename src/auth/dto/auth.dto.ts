import { IsEmail, IsString, IsEnum, MinLength } from 'class-validator';

export enum UserRole {
    SUPER_ADMIN = 'SUPER_ADMIN',
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    DEVELOPER = 'DEVELOPER',
    TESTER = 'TESTER',
}

export class RegisterDto {
    @IsString()
    full_name: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;

    @IsEnum(UserRole)
    role: UserRole;
}

export class LoginDto {
    @IsEmail()
    email: string;

    @IsString()
    password: string;
}   