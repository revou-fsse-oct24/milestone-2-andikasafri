# E-commerce Web Application

![Website Screenshot](insert-your-image-link-here)

Welcome to the **E-commerce Web Application** project! This document provides an overview of the project, its structure, features, and the struggles faced during its development. This README will serve as a comprehensive guide to understanding and using the application.

---

## **Table of Contents**

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Project Structure](#project-structure)
4. [Technologies Used](#technologies-used)
5. [Setup Instructions](#setup-instructions)
6. [Struggles Faced](#struggles-faced)
7. [Future Improvements](#future-improvements)
8. [Acknowledgments](#acknowledgments)

---

## **Project Overview**

This project is a modern e-commerce web application built with **React** and **TypeScript**. It is designed to provide a seamless shopping experience with a responsive UI, efficient state management, and advanced animations. The application includes features such as user authentication, a product catalog, a shopping cart, and more.

---

## **Features**

- **User Authentication**: Login and registration with form validation.
- **Product Management**:
  - View product details.
  - Add, update, and remove items from the shopping cart.
  - Pagination and category filtering.
- **Responsive Design**: Optimized for desktop and mobile.
- **Animations**: Interactive animations using Framer Motion.
- **State Management**: Centralized state using Zustand.
- **API Integration**: Data fetching with React Query.
- **Performance Optimization**: Built with Vite for faster builds and optimized performance.

---

## **Project Structure**

The project is organized into the following directories:

- **`src/components`**: Reusable UI components.
- **`src/pages`**: Components for application routes (e.g., Home, Cart, Login).
- **`src/lib`**: API functions and utility methods.
- **`src/store`**: State management logic using Zustand.
- **`src/types`**: TypeScript type definitions.
- **`src/hooks`**: Custom React hooks.
- **`src/styles`**: Tailwind CSS global styles.
- **Configuration Files**:
  - `vite.config.ts`: Configures Vite.
  - `tsconfig.json`: Configures TypeScript.

---

## **Technologies Used**

- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion
- **State Management**: Zustand
- **Data Fetching**: React Query
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **API**: Axios for HTTP requests

---

## **Setup Instructions**

To run this project locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/revou-fsse-oct24/milestone-2-andikasafri.git
   cd your-repo-directory
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start the Development Server**:

   ```bash
   npm run dev
   ```

4. **Build the Project**:

   ```bash
   npm run build
   ```

5. **Preview the Build**:
   ```bash
   npm run preview
   ```

---

## **Struggles Faced**

1. **Managing State with Zustand**:

   - Initial difficulty in replacing props drilling with Zustand for centralized state management.

2. **Implementing Authentication with React Query**:

   - Challenges in handling tokens and refresh workflows.

3. **Optimizing Performance with Vite**:

   - Transitioning from Webpack and configuring Vite for large datasets.

4. **Understanding Tailwind CSS**:

   - Adjusting to the utility-first CSS approach.

5. **Debugging Issues with Framer Motion**:
   - Resolving errors in animation configurations.

---

## **Future Improvements**

1. **Testing**:

   - Add unit tests with Jest and React Testing Library.
   - Write integration tests for critical user flows.

2. **Accessibility**:

   - Enhance keyboard navigation and ARIA roles.

3. **Performance Optimization**:
   - Use `React.memo` or `useMemo` for optimization.
   - Implement lazy loading for components.

---

## **Acknowledgments**

Special thanks to the developers and the community for their support and contributions to this project.

---

If you have any questions or feedback, feel free to reach out. Enjoy exploring the project!
