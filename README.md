# Simple Tasks Manager

This is a simple task management application built with Vue 3, Vite, and Nuxt UI, with data persistence in local storage. It allows users to manage simple tasks.

## Technologies Used

* **Vue 3:** A progressive JavaScript framework for building user interfaces.
* **Vite:** A fast build tool and development server for Vue.
* **Nuxt UI:** A Vue UI library providing pre-built components and styling with Tailwind CSS v4. It was previously only available for Nuxt but now is compatible with Vue.
* **Zod:** For schema validation of task data.
* **Cypress:** For end-to-end testing.
* **Vitest:** For unit testing.
* **TypeScript:** For type safety and improved code maintainability.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Official Vue Extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Project Setup

Follow these steps to get the project running locally:

### Installation

1. **Clone this repository:**
   ```sh
   git clone https://github.com/angelhodar/simple-tasks-manager-vue
   cd simple-tasks-manager-vue
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
   This will start the Vite development server at `http://localhost:5173`. Open this URL in your browser to view the application.

### Build for Production

* **Compile and minify for production:**
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

   > Unit tests cant be executed at the moment because of an [issue](https://github.com/nuxt/ui/issues/3213) with Nuxt UI. It could be solved by moving the UI library to something like [shadcn-vue](https://www.shadcn-vue.com/docs/installation/vite.html), which is also based on Tailwind (no v4 support at the moment) and Reka-UI.

* **Run end-to-end tests with Cypress in development mode (against the dev server):**
   ```sh
   npm run test:e2e:dev
   ```
   This will open the Cypress Test Runner, allowing you to run tests interactively.

* **Run end-to-end tests with Cypress (against the production build):**
   ```sh
   npm run test:e2e
   ```
   This command first builds the application and then runs Cypress tests against the built application served by `npm run preview`.

### Observations and areas of improvements

1. Pagination state could be handled in URL for better link sharing. I already did that for React in this [blog post](https://angelhodar.com/blog/reusable-usequeryparams-hook-nextjs-validation-zod)
2. When performing any action over a task, it is always recommended to add an extra confirmation step dialog.