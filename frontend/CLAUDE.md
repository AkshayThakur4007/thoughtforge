@AGENTS.md

# ThoughtForge Frontend - Implemented Features

This document tracks the features currently implemented in the frontend application, including their associated components, pages, and API services.

## 1. Authentication
* **Feature:** User registration, login, logout, and secure route protection.
* **Service:** `src/services/auth.service.ts` 
  * `register()` - Creates a new user.
  * `login()` - Authenticates and sets HTTP-only cookie.
  * `logout()` - Clears the authentication cookie.
* **Routing/Security:** `src/middleware.ts` (Edge middleware protecting `/projects`, `/ideas`, and `/settings`).
* **Pages:** `/login`, `/register`
* **Components:** `AuthLayout.tsx`

## 2. Dashboard Layout
* **Feature:** A persistent, collapsible sidebar navigation system that houses user profile data, theme controls, and logout functionality.
* **Pages/Routes:** Route group `(dashboard)` mapping to `/projects`, `/ideas`, `/settings`. (Navigating to `/dashboard` redirects to `/projects`).
* **Components:** 
  * `Sidebar.tsx` - Handles navigation, collapse state, and user actions.
  * `ThemeToggle.tsx` - Dark/light mode switcher.

## 3. Projects Management
* **Feature:** Grid view of all active projects, with a slide-out sheet to create new projects.
* **Service:** `src/services/project.service.ts`
  * `getProjects()`, `createProject()`, `getProject()`, `updateProject()`, `deleteProject()`
* **Pages:** `/projects`
* **Components:** 
  * `ProjectCard.tsx` - Visualizes individual project entities.
  * `CreateProjectSheet.tsx` - Slide-out form using Shadcn `<Sheet>` for project creation.

## 4. Ideas Management
* **Feature:** Grid view of raw ideas and concepts.
* **Service:** `src/services/idea.service.ts`
  * `getIdeas()`, `createIdea()`, `getIdea()`, `updateIdea()`, `deleteIdea()`
* **Pages:** `/ideas`
* **Components:**
  * `IdeaCard.tsx` - Visualizes individual ideas with status badges (Draft/Published).
