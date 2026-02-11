import { IsEmail, IsString, IsEnum, MinLength } from 'class-validator';

export enum UserRole {
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    DEVELOPER = 'DEVELOPER',
    TESTER = 'TESTER',
}

export class RegisterDto {
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