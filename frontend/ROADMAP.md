# ThoughtForge Feature Tracker

This document keeps track of all features that have been implemented, are currently in progress, or are planned for the future.

## ✅ Implemented Features

### Phase 1: Foundation & Authentication
- **Full-Stack Setup**: Initialized Next.js frontend and Express/Node.js backend in a monorepo structure.
- **Database Architecture**: Configured PostgreSQL with Prisma ORM.
- **Frontend UI System**: Integrated Shadcn UI components (avatars, buttons, dropdowns, inputs, sheets, etc.) and Light/Dark mode theming.
- **Landing Page**: Built a responsive landing page showcasing product preview, principles, and workflow.
- **User Authentication**:
  - `User` database model.
  - JWT-based authentication flow.
  - Login and Registration API endpoints.
  - Frontend Login and Registration pages with API integration.
  - Protected API routes via authentication middleware.
  - Configured CORS for secure cross-origin requests.

## 🚧 In Progress / Next Up

### Phase 2: Core Entities (Ideas & Projects)
- **Database Schema**: Add `Idea` and `Project` models.
- **Backend APIs**: Create CRUD endpoints for Ideas and Projects with ownership authorization.
- **Frontend Dashboard**: Build a protected dashboard layout with sidebar navigation.
- **Entity Management**: Views and forms to create, list, and manage Ideas and Projects.

## 📅 Planned Features

### Phase 3: AI Integration (Gemini)
- **AI Idea Generation**: Use Google Gemini to expand on brief thoughts.
- **AI Categorization**: Automatically categorize ideas into relevant projects or tags.
- **Task Extraction**: AI-powered extraction of actionable tasks from free-form idea descriptions.

### Phase 4: Polish & Advanced Features
- **User Settings**: Profile management and application preferences.
- **Collaborative Projects**: Allow sharing projects or ideas with other users.
- **Rich Text Editing**: Enhanced editor for idea content.
