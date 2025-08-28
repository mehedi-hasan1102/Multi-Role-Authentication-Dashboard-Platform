# Multi-Role Authentication & Dashboard Platform

This project is a comprehensive front-end application built with React, demonstrating a complete authentication system and role-based dashboards for three distinct user types: Admin, Merchant, and Member.

## Features

- **Role-Based Access Control:** Separate login, registration, and dashboard experiences for Admins, Merchants, and Members.
- **Modern UI:** A sleek, modern interface built with Tailwind CSS, featuring gradient backgrounds and subtle animations.
- **State Management:** Centralized state management using Redux Toolkit for authentication and dashboard data.
- **Protected Routes:** Secure dashboard routes that redirect unauthenticated users to the appropriate login page.
- **Component-Based Architecture:** Built with reusable React components for a clean and maintainable codebase.

### Dashboards

- **Admin Dashboard:** Manage all users and merchants in a clean, organized table. View platform-wide statistics.
- **Merchant Dashboard:** Approve purchases, look up customer details, set contribution rates, and view notifications.
- **Member Dashboard:** View a summary of loyalty points, including total, earned, and redeemed points, with a visual trend chart.

### Technical Features

- **Form Validation:** Client-side validation for all login and registration forms.
- **Data from JSON:** All dummy data is loaded from external JSON files, making it easy to manage and modify.
- **Section-Specific Loaders:** Enhanced user experience with loaders for specific actions, like approving a purchase.

## Technologies Used

- **React:** For building the user interface.
- **Vite:** As the front-end build tool and development server.
- **React Router:** for client-side routing and navigation.
- **Redux Toolkit:** For predictable and centralized state management.
- **Tailwind CSS:** For all styling and UI design.
- **Recharts:** For displaying beautiful and responsive charts in the dashboards.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js (v18 or later recommended)
- npm (comes with Node.js)

### Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/mehedi-hasan1102/Multi-Role-Authentication-Dashboard-Platform
   ```

2. **Navigate to the project directory:**
   ```sh
   cd <PROJECT_DIRECTORY>
   ```

3. **Install dependencies:**
   This will install all the necessary packages for the project.
   ```sh
   npm install
   ```

4. **Run the development server:**
   This will start the Vite development server, typically on `http://localhost:5173`.
   ```sh
   npm run dev
   ```

The application should now be open and running in your web browser.