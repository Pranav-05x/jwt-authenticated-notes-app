# JWT Authenticated Notes App

A Notes Application built to learn JWT Authentication, Authorization, Middleware, and Local Storage using Node.js and Express.js.

## Features

- User Signup & Signin
- JWT-based Authentication
- Protected Routes
- Authentication Middleware
- Local Storage Token Management
- User-specific Notes
- Axios API Integration

## Tech Stack

- Node.js
- Express.js
- JWT (jsonwebtoken)
- HTML
- JavaScript
- Axios

## How It Works

1. A user creates an account using the signup page.
2. The user signs in with valid credentials.
3. The server generates a JWT token.
4. The token is stored in the browser's Local Storage.
5. Every protected request sends the token in the request headers.
6. Middleware verifies the token before allowing access.
7. Authenticated users can create and view their own notes.

## Authentication Flow

```text
Signup
   ↓
Signin
   ↓
JWT Generated
   ↓
Stored in Local Storage
   ↓
Token Sent in Headers
   ↓
Middleware Verifies Token
   ↓
Access Protected Notes Routes
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd <repository-name>
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node index.js
```

The application will run on:

```txt
http://localhost:3000
```

## Learning Outcomes

- Authentication vs Authorization
- JWT Generation & Verification
- Express Middleware
- Protected Routes
- HTTP Headers
- Local Storage
- Frontend–Backend Communication
- Axios Requests

---

Built to understand how JWT authentication, middleware, protected routes, and local storage work together in a full-stack application.
