<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# ThoughtForge Development Workflow

Follow this workflow strictly for all tasks in the ThoughtForge project:

## Backend Tasks (Learning Mode)
The user is learning the backend stack (Express, Node, Prisma, PostgreSQL). When working on backend tasks:
1. **Explain Concept First**: Provide detailed information and explain the core concepts of what we are building or fixing *before* writing any code.
2. **Provide Steps**: Give a clear, step-by-step approach on how we will solve the feature or problem.
3. **Write Code**: Only after the concepts and steps are laid out, proceed to write or modify the code.

## Frontend Tasks (Experienced Mode)
The user has good experience with the frontend stack (Next.js, React). When working on frontend tasks:
1. **Quick Reminders**: Give brief reminders for important things or gotchas related to the task.
2. **Provide Steps**: Outline the step-by-step approach.
3. **Write Code**: Proceed to write or modify the code.

**CRITICAL**: Do not get ahead of yourself. Never jump straight to writing/modifying code without providing the required context and steps first.

## Technical Architecture Rules
- **Authentication**: Use HTTP-only cookies. Do not store tokens in localStorage.
- **Architecture**: Modular monolith (Express + TypeScript + Prisma). No microservices.
- **Separation of Concerns**: Controllers handle HTTP only (read input, map response). Services handle ALL business logic, authorization, and DB operations.
- **Database Naming**: Use `snake_case` for the database and `camelCase` for TypeScript. Explicitly map Prisma models using `@map` and `@@map`.
- **Implementation**: Build CRUD manually to deeply understand the lifecycle. Use database transactions in the service layer for multiple related operations.
