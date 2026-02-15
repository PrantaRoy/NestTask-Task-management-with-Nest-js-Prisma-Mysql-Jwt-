import { IsString, IsEmail, MinLength, IsEnum, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum UserRole {
    SUPER_ADMIN = 'SUPER_ADMIN',
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    DEVELOPER = 'DEVELOPER',
    TESTER = 'TESTER',
}

export class RegisterDto {
    @ApiProperty({ example: 'John Doe', description: 'The full name of the user' })
    @IsString()
    full_name: string;

    @ApiProperty({ example: 'john@example.com', description: 'The email of the user' })
    @IsEmail({}, {
        message: "This email is not valid"
    })
    email: string;

    @ApiProperty({ example: 'password123', description: 'The password of the user', minLength: 6 })
    @IsString()
    @MinLength(6, { message: 'Password must be at least 6 characters long' })
    password: string;

    @ApiProperty({ enum: UserRole, example: UserRole.DEVELOPER, description: 'The role of the user' })
    @IsEnum(UserRole)
    role: UserRole;
}

export class LoginDto {
    @ApiProperty({ example: 'john@example.com', description: 'The email of the user' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: 'password123', description: 'The password of the user' })
    @IsString()
    password: string;
}