# User Service Documentation

## Overview
The User Service is a microservice responsible for managing user profiles in the social network application. It provides endpoints for retrieving user information and handling user-related operations.

## Features
- Retrieve user profile information
- Handle user-related business logic

## Directory Structure
```
user-service
├── src
│   ├── controllers         # Contains the UserController for handling user requests
│   ├── models              # Defines the User model
│   ├── routes              # Contains routes for user-related endpoints
│   ├── services            # Contains business logic for user operations
│   ├── middlewares         # Error handling middleware
│   ├── utils               # Utility functions related to users
│   └── index.ts            # Entry point for the user service
├── Dockerfile               # Docker configuration for the user service
├── package.json             # Dependencies and scripts for the user service
├── tsconfig.json           # TypeScript configuration for the user service
└── README.md               # Documentation for the user service
```

## API Endpoints
- **GET /users/:id**: Retrieve the profile of a user by their ID.

## Setup Instructions
1. Clone the repository.
2. Navigate to the `user-service` directory.
3. Install dependencies using `npm install`.
4. Configure the database connection in the environment variables.
5. Start the service using `npm start`.

## Docker
To run the User Service in a Docker container, use the provided Dockerfile. Build the image and run the container as follows:
```bash
docker build -t user-service .
docker run -p 3000:3000 user-service
```

## Testing
Unit tests can be added to ensure the functionality of the User Service. Follow best practices for writing tests in TypeScript.

## Contribution
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.