# AGENT Configuration and Guidelines

This file contains the mandatory configuration and architectural guidelines for this project.

## 1. Architecture

- **Pattern:** Feature-Sliced Design / Feature Modules.
- **Micro-Frontends:** Implementation using **Module Federation**.
- **Directory Structure:** Focus on modular feature organization (`src/app/features/`, `src/app/shared/`, `src/app/core/`).

## 2. Language & Coding Standards

- **Language:** **English** is mandatory for all code, variable names, function names, classes, comments, and commit messages.
- **Principles:** strictly adhere to **SOLID** principles and **Clean Code** practices.
- **TypeScript:** Strong typing is required. Avoid `any`.

## 3. Styling (CSS)

- **Framework:** **TailwindCSS**.
- **Layout:** Use **Flexbox** exclusively. **Do NOT use CSS Grid layouts**.
- **Responsiveness:** All components must be fully responsive.
- **Theming:**
  - Implement **Light**, **Dark**, and **System** modes.
  - User must be able to select the preferred theme.
  - Use CSS variables for theme definition to facilitate switching.

## 4. Reactivity & State Management (Angular)

- **HTTP Client:** Use **RxJS** for HTTP requests.
- **Signal Integration:**
  - **Standard:** Convert all RxJS Observables from HTTP calls into Signals immediately using `toSignal()`.
  - **UI State:** **ALWAYS** use **Signals** for UI state management.
  - **Avoid:** Manual subscriptions (`.subscribe()`) in components where `toSignal` or `async` pipe can be used (prefer `toSignal`).

## 5. Documentation & Files

- **Markdown Files:** **Do NOT create `.md` files** (like `task.md`, `implementation_plan.md`, etc.) unless EXPLICITLY requested by the user.
