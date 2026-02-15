import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { SubtasksModule } from './subtasks/subtasks.module';

@Module({
  imports: [PrismaModule, AuthModule, ProjectsModule, UsersModule, TasksModule, SubtasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
