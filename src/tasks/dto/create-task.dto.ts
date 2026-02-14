import { IsString, IsNotEmpty, IsOptional, IsInt, IsEnum, IsDateString } from 'class-validator';
import { Status } from '@prisma/client';

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsInt()
    @IsNotEmpty()
    projectId: number;

    @IsInt()
    @IsOptional()
    assigneeId?: number;

    @IsEnum(Status)
    @IsOptional()
    status?: Status;

    @IsDateString()
    @IsOptional()
    assign_date?: string;

    @IsDateString()
    @IsOptional()
    due_date?: string;
}
