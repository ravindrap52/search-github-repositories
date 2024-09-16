# Project Name
Github Repositories

## Description
A web application for searching GitHub repositories.

# Technologies Used in the Project

## Vue 3
The JavaScript framework for building user interfaces.

## Quasar Framework
Provides reusable components.

## Pinia
Manages the client-side state in a Vue application.

## Vue Query
Handles server-side caching and data fetching, simplifying interactions with APIs and improving performance.

## Vitest
Used for unit testing, individual components.

## Tailwind CSS
Styling components using utility classes.

## Folder Structure

### `src/`

- **`components/`**: Reusable Vue components.
  - `common/`: General-purpose components like buttons, inputs, etc.

- **`boot/`**: A boot file is a simple JavaScript file which can optionally export a function. Quasar will then call the exported         function when it boots the application.

- **`composables/`**: Vue 3 composables for reusable logic.
  - `useSearchByMultipleFiltrs.ts`: Composable to fetch the data.

- **`i18n/`**: Internatioanlization.

- **`layouts/`**: Layout components used across different pages.
  - `MainLayout.vue`: Default layout for the application.

- **`pages/`**: Components representing application pages or views.
  - `Indexpage.vue`: Home page component.
  - `ErrorNotFound.vue`: Error when no route found.

- **`router/`**: Vue Router configuration and route modules.
  - `index.ts`: Main router setup.
  - `routes/`: Sub-directory for route modules.
    - `authRoutes.ts`: Contains authentication-related routes.

- **`store/`**: Pinia stores for state management.
  - `index.ts`: Main Pinia store setup.
  - `formStore.ts`: Contains form items ralated state.

- **`types/`**: TypeScript types and interfaces.
  - `index.d.ts`: Global types and interfaces.

- **`utils/`**: Utility functions and helpers.
  - `formvalidation.ts`: Utility for form validation.
  - `dateUtils.ts`: utility for dates.

- **`App.vue`**: The root Vue component of the application.

- **`main.ts`**: Entry point where the Vue app is initialized and mounted.

- **`vite.config.ts`**: Vite configuration file for build setup and optimization.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (v16 or later)
- npm or Yarn

### Installation

### Cloning the Repository
To clone the repository, use the following command:
```bash
git clone https://github.com/ravindrap52/search-github-repositories.git
```
### Installation
To install the dependencies by running, use the following command:
```bash
cd search-github-repositories
npm install
```
### Running the Development Server
To start the development server, run:
```bash
npm run dev
```
#### Browser will open and it navigate to http://localhost:9000/#/

### Building for Production
To build the project for production, use:
```bash
npm run build
```
### Testing
To test the project, use:
```bash
npm run test:unit
```
## Accomplishments
- **Strong Linting for TypeScript**
- **Reusable Components**
- **i18n Strings**
- **Server-Side Caching with VueQuery**: Reduces network calls and improves performance by caching data.
- **Pinia for State Management**
- **Typings and Interfaces**
- **Environment-Specific Files**
- **Tailwind for Utility Classes**

## Areas for Improvement
1. **More Test Cases**

2. **Responsiveness**

3. **Animation Improvements**


4. **Smooth Infinite Scroll**



