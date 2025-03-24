# Simple Tasks Manager

This is a simple task management application built with Vue 3, Vite, and Nuxt UI, with data persistence in local storage. It allows users to create, edit, delete, and toggle the status of tasks.

## Features

* **Create Tasks:** Add new tasks with titles, descriptions, and due dates.
* **Edit Tasks:** Modify existing task details.
* **Delete Tasks:** Remove tasks from the list.
* **Toggle Task Status:** Mark tasks as pending or completed.
* **Local Storage Persistence:** Tasks are saved in the browser's local storage, so data persists across sessions.
* **Responsive Design:** The application is designed to work well on different screen sizes.

## Technologies Used

* **Vue 3:**  A progressive JavaScript framework for building user interfaces.
* **Vite:** A fast build tool and development server for Vue.
* **Nuxt UI:** A Vue UI library providing pre-built components and styling with Tailwind CSS v4.
* **Zod:**  For schema validation of task data.
* **Cypress:** For end-to-end testing.
* **Vitest:** For unit testing.
* **TypeScript:** For type safety and improved code maintainability.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Official Vue Extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Project Setup

Follow these steps to get the project running locally:

### Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repository-url>
   cd <your-project-folder>
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

### Development

* **Start the development server with hot-reload:**
   ```sh
   npm run dev
   ```
   This will start the Vite development server at `http://localhost:4173`. Open this URL in your browser to view the application.

### Build for Production

* **Type-check, compile, and minify for production:**
   ```sh
   npm run build
   ```
   This command will generate production-ready files in the `dist` directory.

### Preview Production Build

* **Preview the production build locally:**
   ```sh
   npm run preview
   ```
   This starts a local server to serve the built application from the `dist` directory.

### Running Tests

* **Run unit tests with Vitest:**
   ```sh
   npm run test:unit
   ```

* **Run end-to-end tests with Cypress in development mode (against the dev server):**
   ```sh
   npm run test:e2e:dev
   ```
   This will open the Cypress Test Runner, allowing you to run tests interactively.

* **Run end-to-end tests with Cypress (against the production build):**
   ```sh
   npm run test:e2e
   ```
   This command first builds the application and then runs Cypress tests against the built application served by `npm run preview`. This is recommended before deploying.

### Linting and Formatting

* **Run ESLint to analyze code and fix linting errors:**
   ```sh
   npm run lint
   ```

* **Format code with Prettier:**
   ```sh
   npm run format
   ```
   This command automatically formats the code in the `src/` directory according to Prettier's configuration.

### Type Checking

* **Run Vue TypeScript compiler to check for type errors:**
   ```sh
   npm run type-check
   ```

## Project Structure

```
.
├── .editorconfig              # Editor configuration for consistent coding style
├── .gitattributes             # Git attributes configuration
├── .gitignore                 # Specifies intentionally untracked files that Git should ignore
├── .prettierrc.json           # Prettier configuration file
├── cypress.config.ts          # Cypress configuration file
├── cypress/                   # Directory for Cypress end-to-end tests
│   └── e2e/                   # End-to-end tests
│       └── tasks-manager.cy.ts
│   └── support/               # Support files for Cypress
│   └── tsconfig.json          # TypeScript configuration for Cypress
├── Dockerfile                 # Docker configuration for containerization
├── env.d.ts                   # TypeScript environment declaration file
├── eslint.config.ts           # ESLint configuration file
├── index.html                 # Main HTML entry point
├── package.json               # Project dependencies and scripts
├── README.md                  # Project documentation (this file)
├── src/                       # Source code directory
│   ├── App.vue                # Root Vue component
│   ├── assets/                # Application assets (images, CSS, etc.)
│   │   ├── logo.svg
│   │   └── main.css
│   ├── components/            # Vue components
│   │   ├── __tests__/          # Unit tests for components
│   │   │   └── App.spec.ts
│   │   ├── Exercise.vue       # Main application component (task list and form)
│   │   ├── Table.vue          # Task table component
│   │   └── TaskForm.vue       # Task form component
│   ├── main.ts                # Entry point for the Vue application
│   ├── router/                # Vue Router configuration
│   │   └── index.ts
│   ├── stores/                # Vuex-like store (using refs and localStorage)
│   │   └── tasks.ts
│   └── views/                 # (If you had views, they would go here - currently using components directly)
├── tsconfig.app.json          # TypeScript configuration for the application
├── tsconfig.json              # Root TypeScript configuration
├── tsconfig.node.json         # TypeScript configuration for Node.js environments (build tools etc.)
├── tsconfig.vitest.json       # TypeScript configuration for Vitest
├── vite.config.ts             # Vite configuration file
└── vitest.config.ts           # Vitest configuration file
```