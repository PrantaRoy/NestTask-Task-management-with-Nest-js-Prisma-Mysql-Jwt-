import { IsString, IsNotEmpty, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
    @ApiProperty({ example: 'Website Redesign', description: 'The name of the project' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: 'Redesigning the company website for better UX', description: 'The description of the project' })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({ example: 1, description: 'The ID of the project manager' })
    @IsInt()
    @IsNotEmpty()
    managerId: number;
}
