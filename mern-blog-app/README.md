# MERN Blog Application

## Overview
This project is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) blog application that allows users to create, read, update, and delete blog posts. It features user authentication, image uploads, comments, and a responsive design.

## Features
- **Full CRUD Functionality**: Users can create, read, update, and delete blog posts.
- **User Authentication**: Users can register and log in to manage their posts.
- **Comments**: Users can comment on blog posts.
- **Image Uploads**: Users can upload images for their blog posts.
- **Responsive Design**: The application is designed to work on various screen sizes.

## Technologies Used
- **Frontend**: React.js, Vite, React Router, Axios
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **File Uploads**: Multer for handling image uploads

## Project Structure
```
mern-blog-app
├── client               # React frontend
│   ├── src
│   ├── public
│   ├── .env.example
│   ├── package.json
│   └── README.md
├── server               # Express backend
│   ├── src
│   ├── .env.example
│   ├── package.json
│   └── README.md
└── README.md            # This file
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd mern-blog-app
   ```

2. Install server dependencies:
   ```
   cd server
   npm install
   ```

3. Install client dependencies:
   ```
   cd client
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in both the `client` and `server` directories based on the `.env.example` files.

5. Start the development servers:
   ```
   # In the server directory
   npm run dev
   
   # In the client directory
   npm run dev
   ```

## API Documentation
Refer to the `server/README.md` for detailed API documentation, including endpoints for posts, users, comments, and categories.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.