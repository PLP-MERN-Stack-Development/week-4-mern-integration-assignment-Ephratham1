# MERN Blog Application - Server

## Overview
This is the server-side implementation of the MERN Blog Application. It provides a RESTful API for managing blog posts, user authentication, comments, and categories. The server is built using Express.js and MongoDB, utilizing Mongoose for database interactions.

## Features
- Full CRUD functionality for blog posts
- User authentication and authorization
- Comment management for blog posts
- Category management for organizing posts
- Image uploads for blog post featured images
- Error handling middleware
- Input validation for user inputs

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd mern-blog-app/server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file based on the `.env.example` file and configure your MongoDB connection string and other necessary variables.

### Running the Server
To start the server, run:
```
npm run dev
```
This will start the server in development mode.

### API Endpoints
- **Posts**
  - `GET /api/posts`: Retrieve all blog posts
  - `GET /api/posts/:id`: Retrieve a specific blog post
  - `POST /api/posts`: Create a new blog post
  - `PUT /api/posts/:id`: Update an existing blog post
  - `DELETE /api/posts/:id`: Delete a blog post

- **Users**
  - `POST /api/users/register`: Register a new user
  - `POST /api/users/login`: Log in a user

- **Comments**
  - `GET /api/posts/:postId/comments`: Retrieve comments for a specific post
  - `POST /api/posts/:postId/comments`: Add a comment to a specific post

- **Categories**
  - `GET /api/categories`: Retrieve all categories
  - `POST /api/categories`: Create a new category

## Folder Structure
```
server
├── src
│   ├── controllers       # Controllers for handling requests
│   ├── models            # Mongoose models
│   ├── routes            # API routes
│   ├── middleware        # Middleware for authentication and error handling
│   ├── utils             # Utility functions
│   ├── config            # Configuration files
│   ├── app.js            # Express app setup
│   └── server.js         # Server entry point
├── .env.example          # Example environment variables
├── package.json          # Server dependencies and scripts
└── README.md             # This documentation
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License
This project is licensed under the MIT License. See the LICENSE file for details.