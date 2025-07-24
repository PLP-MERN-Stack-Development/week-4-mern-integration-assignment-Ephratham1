# Client-Side Blog Application

## Overview
This is the client-side of a full-stack MERN (MongoDB, Express.js, React.js, Node.js) blog application. It provides a user-friendly interface for interacting with the blog's features, including viewing posts, creating and editing posts, user authentication, and commenting on posts.

## Features
- **Post Management**: Users can view, create, edit, and delete blog posts.
- **User Authentication**: Users can register and log in to access protected routes.
- **Comments**: Users can comment on blog posts.
- **Image Uploads**: Users can upload images for their blog posts.
- **Responsive Design**: The application is designed to be responsive and user-friendly.

## Project Structure
```
client
├── src
│   ├── components
│   │   ├── PostList.jsx        # Displays a list of blog posts
│   │   ├── PostView.jsx        # Shows details of a single blog post
│   │   ├── PostForm.jsx        # Form for creating/editing blog posts
│   │   ├── Auth
│   │   │   ├── Login.jsx       # User login component
│   │   │   └── Register.jsx    # User registration component
│   │   │
│   │   ├── Comments
│   │   │   ├── CommentList.jsx  # Displays comments for a post
│   │   │   └── CommentForm.jsx   # Form for submitting comments
│   │   │
│   │   ├── Layout
│   │   │   ├── Navbar.jsx       # Navigation bar component
│   │   │   └── Footer.jsx       # Footer component
│   │   │
│   │   ├── hooks
│   │   │   └── useApi.js        # Custom hook for API calls
│   │   │
│   │   ├── context
│   │   │   └── AuthContext.jsx  # Context for managing authentication state
│   │   │
│   │   ├── pages
│   │   │   ├── Home.jsx         # Homepage displaying posts
│   │   │   ├── Post.jsx         # Page for a single post
│   │   │   ├── CreatePost.jsx   # Page for creating a new post
│   │   │   ├── EditPost.jsx     # Page for editing a post
│   │   │   └── Profile.jsx      # User profile page
│   │   │
│   │   ├── services
│   │   │   └── api.js           # API request functions
│   │   │
│   │   ├── App.jsx              # Main application component
│   │   ├── main.jsx             # Entry point for the React application
│   │   └── index.css            # Global styles
│   ├── public
│   │   └── vite.svg             # Static asset
│   ├── .env.example              # Example environment variables
│   ├── package.json              # Client dependencies and scripts
└── README.md                    # Documentation for the client-side application
```

## Setup Instructions
1. Clone the repository.
2. Navigate to the client directory:
   ```
   cd client
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Set up environment variables by copying `.env.example` to `.env` and updating the values.
5. Start the development server:
   ```
   npm run dev
   ```

## API Integration
The client communicates with the back-end API to perform CRUD operations on blog posts, handle user authentication, and manage comments. Ensure the server is running to test the client functionality.

## Contribution
Feel free to contribute to the project by submitting issues or pull requests. Your feedback and suggestions are welcome!