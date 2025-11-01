# Zen Plan

## Project Overview

A full-stack wellness planning application that helps users build healthy lifestyle routines through a structured weekly calendar. It features JWT authentication, customizable wellness activities (yoga, meditation, exercise, meal prep), category-based task organization, and progress tracking to promote holistic physical, mental, and emotional well-being.

## Key Features

- **Authentication**: Secure login and sign-up functionality using JWT (JSON Web Tokens) for token-based user sessions with HTTP-only cookies.
- **Home Page**: Calendar view with a clean, calming UI for routine planning.
- **Custom Activities**: Add/edit wellness tasks like:
  - Yoga
  - Meal Prep
  - Meditation
  - Exercise
  - Medical Checkup
- **Wellness Tags**: Organize tasks by category:
  - Self-care
  - Physical
  - Nutrition
  - Health
- **Daily Tasks Page**: View, add, edit, and delete daily tasks with additional notes.
- **Statistics & Settings**: View completed tasks by category and manage preferences.

---

## Tech Stack

### Frontend

- React 19
- Vite
- Tailwind CSS
- Axios
- React Router DOM
- Radix UI Components
- FontAwesome Icons

### Backend

- Node.js
- Hono (TypeScript)
- Prisma ORM
- MySQL
- JWT & bcrypt
- HTTP-only cookies

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MySQL database
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/CSC105-2024/G14-Quantum019-PreHack-2025.git
cd zen-plan-group-project
```

---

## Frontend Setup

```bash
cd zenplan-frontend
npm install
```

Create a `.env` file in the `zenplan-frontend` directory:

```env
VITE_URL=http://localhost:3000
FRONT_END_PORT=5173
```

Start the development server:

```bash
npm run dev
```

The frontend will run at `http://localhost:5173`

---

## Backend Setup

```bash
cd zenplan-backend
npm install
```

Create a `.env` file in the `zenplan-backend` directory:

```env
PORT=3000
DATABASE_URL=mysql://username:password@localhost:3306/zenplan
SHADOW_DATABASE_URL=mysql://username:password@localhost:3306/zenplan_shadow
JWT_SECRET=your_jwt_secret_key_here
COOKIE_SECRET_KEY=your_cookie_secret_key_here
```

Run Prisma migrations:

```bash
npx prisma migrate dev
npx prisma generate
```

Start the development server:

```bash
npm run dev
```

The backend will run at `http://localhost:3000`

---

## API Endpoints

### User Routes

| Method | Endpoint            | Description             |
| ------ | ------------------- | ----------------------- |
| POST   | /user/register      | Register a new user     |
| POST   | /user/login         | Log in an existing user |
| POST   | /user/logout        | Log out a user          |
| PUT    | /user/edit/info     | Edit user profile info  |
| PATCH  | /user/edit/password | Change user password    |

### List Routes

| Method | Endpoint         | Description                 |
| ------ | ---------------- | --------------------------- |
| GET    | /list/get        | Fetch all lists             |
| POST   | /list/create     | Create a new list item      |
| PUT    | /list/edit/:id   | Edit an existing list item  |
| DELETE | /list/delete/:id | Delete a list item          |
| PATCH  | /list/toggle/:id | Toggle completion of a list |
| PATCH  | /list/complete   | Mark all lists as complete  |

---

## Project Structure

```
zen-plan-group-project/
├── zenplan-frontend/     # React frontend application
│   ├── src/
│   ├── public/
│   └── vite.config.js
├── zenplan-backend/      # Node.js backend API
│   ├── src/
│   ├── prisma/
│   └── tsconfig.json
└── README.md
```

---

## Development Notes

- The application uses JWT tokens stored in HTTP-only cookies for secure authentication.
- Prisma is used as the ORM for database operations with MySQL.
- The frontend communicates with the backend via Axios HTTP requests.
- CORS is configured to allow requests from the frontend origin.
