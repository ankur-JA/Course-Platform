# Course Platform

## Overview
This repository contains a small full-stack example for an online course marketplace. The backend is a Node.js + Express API that stores data in MongoDB using Mongoose. The frontend is built with React and uses Recoil for state management together with Material UI components.

### Key Features
- **Authentication** using JSON Web Tokens (JWT)
- **Admin** APIs for creating and managing courses
- **User** APIs for browsing and purchasing courses
- **React** client with Recoil state and Material UI

## Project Structure
```
├── server          # Express API and MongoDB models
│   ├── db/         # Mongoose schemas
│   ├── routes/     # Admin and user routes
│   └── middleware/ # JWT authentication helper
├── src             # React application
│   ├── components/ # React components
│   ├── store/      # Recoil atoms and selectors
│   └── config.js   # API base URL
├── index.html      # Vite entry point
└── package.json    # Frontend dependencies and scripts
```

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB running locally (default connection string is `mongodb://localhost:27017`)

## Setup
1. **Install dependencies**
   ```bash
   npm install
   cd server && npm install
   ```
2. **Start MongoDB**
   Ensure a MongoDB instance is running locally. The server connects to the `courses` database on startup.
3. **Run the backend**
   ```bash
   node index.js
   ```
   This starts the API server on `http://localhost:3000`.
4. **Run the frontend** (from the repository root)
   ```bash
   npm run dev
   ```
   The React development server will start on Vite's default port (usually `5173`).

## Usage
- Create an **admin** account via the `/admin/signup` endpoint or the admin signup page.
- Admins can create, update, and list courses.
- Regular **users** can sign up, browse published courses, and purchase them.
- Purchased courses are stored in the user's document and can be viewed on the "Purchased" page.

## Environment Variables
For a production deployment you should store sensitive values in environment variables. The project currently uses a hardcoded JWT secret (`SECRET` in `server/middleware/auth.js`); feel free to replace it with your own value by reading it from `process.env.SECRET`.

## Contributing
Pull requests are welcome. Please open an issue first to discuss major changes.

## License
This project is licensed under the MIT License.
