A Role-Based Team Productivity & Task Management API
NestTask Pro is a robust Backend API designed to streamline team collaboration through hierarchical task management and strict Role-Based Access Control (RBAC). Built with the power of NestJS, Prisma, and MySQL, the system allows organizations to manage complex projects by breaking them down into tasks and subtasks, ensuring clear accountability and progress tracking.

🚀 Key Features
Advanced Role-Based Access Control (RBAC):

Managers: Full administrative power to create projects, define tasks/subtasks, and assign them to specific team members with deadlines.

Developers & Testers: Dedicated access to view assigned workloads and update task statuses in real-time.

Hierarchical Task Management: Supports a three-tier structure (Project → Task → Subtask) for granular control over complex workflows.

Task Lifecycle Tracking: Integrated status management supporting various states: Pending, In Progress, Completed, and Rejected.

Personalized Dashboards: Users can retrieve their specific assignments with advanced filtering and sorting by status or priority.

Secure Authentication: Secure user onboarding and login powered by JWT (JSON Web Tokens) and Bcrypt password hashing.

🛠️ Technical Highlights
Type-Safe Database Operations: Utilized Prisma ORM with MySQL to ensure type safety, prevent SQL injection, and manage complex relational queries efficiently.

Modular Architecture: Followed NestJS best practices by organizing the codebase into scalable modules (Auth, Users, Projects, Tasks).

Data Validation & Transformation: Implemented class-validator and class-transformer to ensure 100% data integrity for incoming API requests.

Auto-Generated Documentation: Integrated Swagger (OpenAPI) for interactive API testing and clear endpoint definitions.

Guards & Interceptors: Developed custom NestJS Guards to handle permission-based routing, ensuring unauthorized users cannot access manager-level resources.

📊 Database Schema (Brief Overview)
Users: Stores credentials and roles (Manager, Developer, Tester).

Projects: High-level containers for work, owned by Managers.

Tasks: Specific units of work assigned to users with deadlines.

Subtasks: Smaller, actionable items linked to a parent task for detailed tracking.
