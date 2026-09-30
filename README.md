# Developer Network API

A REST API for a developer-focused social networking application.

The project provides the backend foundation for user accounts, authentication, developer profiles, posts, likes, and comments.

## Features

* User registration and authentication
* JWT-based authentication
* Password hashing with bcrypt
* Developer profiles
* Profile experience and education
* Social profile links
* Create and retrieve posts
* Like and unlike posts
* Add and remove comments
* MongoDB database integration
* Request validation
* Protected API routes

## Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **JWT**
* **bcryptjs**
* **Express Validator**
* **Gravatar**
* **Postman**

## Project Structure

```text
Developer Network API/
├── config/
│   └── db.js
├── middleware/
│   └── auth.js
├── models/
│   ├── User.js
│   ├── Profile.js
│   └── Posts.js
├── routes/
│   └── api/
│       ├── auth.js
│       ├── users.js
│       ├── profile.js
│       └── posts.js
├── .env
├── .gitignore
├── package.json
└── server.js
```

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
```

Never commit `.env` or any credentials to the repository.

### 4. Run the development server

```bash
npm run dev
```

The API runs by default on:

```text
http://localhost:5000
```

## API Routes

### Users

```text
POST /api/users
```

Register a new user.

### Authentication

```text
POST /api/auth
GET  /api/auth
```

Authenticate a user and retrieve the authenticated user's information.

### Profiles

```text
GET    /api/profile
POST   /api/profile
PUT    /api/profile
DELETE /api/profile
```

Create, retrieve, update, and delete developer profiles.

### Posts

```text
GET    /api/posts
POST   /api/posts
GET    /api/posts/:id
DELETE /api/posts/:id
PUT    /api/posts/like/:id
PUT    /api/posts/unlike/:id
POST   /api/posts/comment/:id
DELETE /api/posts/comment/:id/:comment_id
```

Manage posts, likes, and comments.

## Authentication

Protected routes use JSON Web Tokens.

The token is sent using the `x-auth-token` request header:

```text
x-auth-token: <token>
```

## Development

Start the development server:

```bash
npm run dev
```

Start the application normally:

```bash
npm start
```

## Project Status

This project is under active development. The backend is being progressively cleaned up, secured, tested, and prepared for integration with a frontend application.

## Author

**Somar Hassn**

IT Engineering — Cybersecurity
