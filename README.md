# NestTask Pro
**A Role-Based Team Productivity & Task Management API**

NestTask Pro is a robust Backend API designed to streamline team collaboration through hierarchical task management and strict Role-Based Access Control (RBAC). Built with the power of NestJS, Prisma, and MySQL, the system allows organizations to manage complex projects by breaking them down into tasks and subtasks, ensuring clear accountability and progress tracking.

---

## 🚀 Key Features

- **Advanced Role-Based Access Control (RBAC)**:
  - **Managers**: Create projects, tasks, and assign work.
  - **Developers & Testers**: View assignments and update statuses.
  - **Admins**: Full system oversight.
- **Hierarchical Task Management**: Structure work as `Project` → `Task` → `Subtask`.
- **Comprehensive Reporting**: Filter tasks by status, user, project, or combinations thereof.
- **Task Lifecycle Tracking**: integrated status management (`PENDING`, `IN_PROGRESS`, `COMPLETED`, `REJECTED`).
- **Secure Authentication**: JWT-based auth with Bcrypt password hashing.
- **Type-Safe Database**: Powered by Prisma ORM and MySQL.

---

## 🛠️ Technology Stack

- **Framework**: [NestJS](https://nestjs.com/)
- **Language**: TypeScript
- **Database**: MySQL
- **ORM**: [Prisma](https://www.prisma.io/)
- **Authentication**: JWT (JSON Web Tokens) & Passport
- **Validation**: class-validator & class-transformer
- **Documentation**: Swagger (OpenAPI)

---

## ⚙️ Setup Guidelines

Follow these steps to set up and run the project locally.

### Prerequisites
- Node.js (v16 or higher)
- MySQL (installed and running)
- npm or yarn

### 1. Clone the Repository
```bash
git clone <repository-url>
cd NestTask
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory and configure your database connection and JWT secret:

```env
# Database connection string
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE_NAME"

# JWT Secret for authentication
JWT_SECRET="your_super_secret_key"
```

### 4. Database Setup
Run Prisma migrations to create the tables:
```bash
npx prisma migrate dev --name init
```

### 5. Running the Application
```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod
```

The API will be available at `http://localhost:3000`.

---

## 📚 API Endpoint Documentation

### 🔐 Authentication
| Method | Endpoint | Description | Access |
|:-------|:---------|:------------|:-------|
| `POST` | `/auth/register` | Register a new user | Public |
| `POST` | `/auth/login` | Login and get JWT token | Public |
| `GET`  | `/auth/profile` | Get current user profile | Authenticated |

### 📂 Projects
| Method | Endpoint | Description | Access |
|:-------|:---------|:------------|:-------|
| `POST` | `/projects` | Create a new project | Manager, Admin |
| `GET`  | `/projects` | Get all projects | Authenticated |
| `GET`  | `/projects/:id` | Get project details | Authenticated |
| `PATCH`| `/projects/:id` | Update project | Manager, Admin |
| `DELETE`| `/projects/:id` | Delete project | Admin |

### ✅ Tasks
| Method | Endpoint | Description | Access |
|:-------|:---------|:------------|:-------|
| `POST` | `/tasks` | Create a new task | Manager, Admin |
| `GET`  | `/tasks` | Get all tasks | Authenticated |
| `GET`  | `/tasks/:id` | Get task details | Authenticated |
| `PATCH`| `/tasks/:id` | Update task | Manager, Admin |
| `DELETE`| `/tasks/:id` | Delete task | Admin |

### 📊 Task Reports
**Endpoint:** `GET /tasks/reports`  
Flexible reporting with query parameters.

| Query Params | Example | Description |
|:-------------|:--------|:------------|
| `status` | `?status=PENDING` | Filter by status (PENDING, IN_PROGRESS, COMPLETED, REJECTED) |
| `userId` | `?userId=5` | Filter by assignee |
| `projectId`| `?projectId=1` | Filter by project |
| **Combinations** | `?status=IN_PROGRESS&projectId=1` | Combine filters for granular reports |

### 📝 Subtasks
| Method | Endpoint | Description | Access |
|:-------|:---------|:------------|:-------|
| `POST` | `/subtasks` | Create a subtask | Manager, Dev, Admin |
| `GET`  | `/subtasks` | Get all subtasks | Authenticated |
| `GET`  | `/subtasks/task/:taskId` | Get subtasks for a task | Authenticated |
| `GET`  | `/subtasks/:id` | Get subtask details | Authenticated |
| `PATCH`| `/subtasks/:id` | Update subtask | Manager, Dev, Admin |
| `DELETE`| `/subtasks/:id` | Delete subtask | Admin |

---

## 📊 Database Schema Overview

- **Users**: Stores user credentials and roles.
- **Projects**: Managed by Managers, contains multiple Tasks.
- **Tasks**: Assigned to Users, belongs to a Project, has Status and deadlines.
- **Subtasks**: Granular work items linked to a parent Task.

---

## 🧪 Testing

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```
