import { IsString, IsNotEmpty, IsOptional, IsInt, IsEnum, IsDateString } from 'class-validator';
import { Status } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
    @ApiProperty({ example: 'Implement Authentication', description: 'The title of the task' })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({ example: 1, description: 'The ID of the project the task belongs to' })
    @IsInt()
    @IsNotEmpty()
    projectId: number;

    @ApiProperty({ example: 1, description: 'The ID of the user assigned to the task', required: false })
    @IsInt()
    @IsOptional()
    assigneeId?: number;

    @ApiProperty({ enum: Status, example: Status.PENDING, description: 'The status of the task', required: false })
    @IsEnum(Status)
    @IsOptional()
    status?: Status;

    @ApiProperty({ example: '2023-12-31T00:00:00.000Z', description: 'The date the task was assigned', required: false })
    @IsDateString()
    @IsOptional()
    assign_date?: string;

    @ApiProperty({ example: '2024-01-31T00:00:00.000Z', description: 'The deadline for the task', required: false })
    @IsDateString()
    @IsOptional()
    due_date?: string;
}
