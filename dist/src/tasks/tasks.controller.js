"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksController = exports.Roles = void 0;
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("./tasks.service");
const create_task_dto_1 = require("./dto/create-task.dto");
const update_task_dto_1 = require("./dto/update-task.dto");
const roles_guard_1 = require("../auth/roles.guard");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
const Roles = (...roles) => (0, common_1.SetMetadata)('roles', roles);
exports.Roles = Roles;
let TasksController = class TasksController {
    tasksService;
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    create(createTaskDto) {
        return this.tasksService.create(createTaskDto);
    }
    findAll() {
        return this.tasksService.findAll();
    }
    getTasksReport(status, projectId, userId) {
        if (userId && status) {
            return this.tasksService.getTasksByUserAndStatus(+userId, status);
        }
        if (userId) {
            return this.tasksService.getTasksByUser(+userId);
        }
        if (status && projectId) {
            return this.tasksService.getTasksByStatusAndProject(status, +projectId);
        }
        if (status) {
            return this.tasksService.getTasksByStatus(status);
        }
        return this.tasksService.findAll();
    }
    getTasksByStatus(status) {
        return this.tasksService.getTasksByStatus(status);
    }
    getTasksByStatusAndProject(status, projectId) {
        return this.tasksService.getTasksByStatusAndProject(status, +projectId);
    }
    getTasksByUser(userId) {
        return this.tasksService.getTasksByUser(+userId);
    }
    getTasksByUserAndStatus(userId, status) {
        return this.tasksService.getTasksByUserAndStatus(+userId, status);
    }
    findOne(id) {
        return this.tasksService.findOne(+id);
    }
    update(id, updateTaskDto) {
        return this.tasksService.update(+id, updateTaskDto);
    }
    remove(id) {
        return this.tasksService.remove(+id);
    }
};
exports.TasksController = TasksController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new task' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The task has been successfully created.' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden. Only Managers and Admins can create tasks.' }),
    (0, common_1.Post)(),
    (0, exports.Roles)('MANAGER', 'ADMIN', 'SUPER_ADMIN'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_dto_1.CreateTaskDto]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all tasks' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all tasks.' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get tasks report with filters' }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, description: 'Filter by task status (PENDING, IN_PROGRESS, COMPLETED, REJECTED)' }),
    (0, swagger_1.ApiQuery)({ name: 'projectId', required: false, description: 'Filter by project ID' }),
    (0, swagger_1.ApiQuery)({ name: 'userId', required: false, description: 'Filter by user ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return filtered tasks.' }),
    (0, common_1.Get)('reports'),
    __param(0, (0, common_1.Query)('status')),
    __param(1, (0, common_1.Query)('projectId')),
    __param(2, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "getTasksReport", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get tasks by status' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return tasks with specific status.' }),
    (0, common_1.Get)('reports/status/:status'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "getTasksByStatus", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get tasks by status and project' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return tasks with specific status and project.' }),
    (0, common_1.Get)('reports/status/:status/project/:projectId'),
    __param(0, (0, common_1.Param)('status')),
    __param(1, (0, common_1.Param)('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "getTasksByStatusAndProject", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get tasks by user' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return tasks assigned to user.' }),
    (0, common_1.Get)('reports/user/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "getTasksByUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get tasks by user and status' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return tasks assigned to user with specific status.' }),
    (0, common_1.Get)('reports/user/:userId/status/:status'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "getTasksByUserAndStatus", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get a task by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return the task.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Task not found.' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update a task' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The task has been successfully updated.' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden. Only Managers and Admins can update tasks.' }),
    (0, common_1.Patch)(':id'),
    (0, exports.Roles)('MANAGER', 'ADMIN', 'SUPER_ADMIN'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_task_dto_1.UpdateTaskDto]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete a task' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The task has been successfully deleted.' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden. Only Admins can delete tasks.' }),
    (0, common_1.Delete)(':id'),
    (0, exports.Roles)('ADMIN', 'SUPER_ADMIN'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "remove", null);
exports.TasksController = TasksController = __decorate([
    (0, swagger_1.ApiTags)('Tasks'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('tasks'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksController);
//# sourceMappingURL=tasks.controller.js.map