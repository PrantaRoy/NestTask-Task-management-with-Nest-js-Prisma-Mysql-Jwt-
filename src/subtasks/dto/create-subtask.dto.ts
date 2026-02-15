import { IsString, IsNotEmpty, IsOptional, IsInt, IsEnum, IsDateString } from 'class-validator';
import { Status } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSubtaskDto {
    @ApiProperty({ example: 'Write unit tests', description: 'The title of the subtask' })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({ example: 1, description: 'The ID of the parent task' })
    @IsInt()
    @IsNotEmpty()
    taskId: number;

    @ApiProperty({ enum: Status, example: Status.PENDING, description: 'The status of the subtask', required: false })
    @IsEnum(Status)
    @IsOptional()
    status?: Status;

    @ApiProperty({ example: '2023-12-31T00:00:00.000Z', description: 'The date the subtask was assigned', required: false })
    @IsDateString()
    @IsOptional()
    assign_date?: string;

    @ApiProperty({ example: '2024-01-31T00:00:00.000Z', description: 'The deadline for the subtask', required: false })
    @IsDateString()
    @IsOptional()
    due_date?: string;
}
