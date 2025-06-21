# Post Service

This directory contains the implementation of the Post Service for the social network application. The Post Service is responsible for managing user posts, including creating posts, retrieving posts, and handling likes.

## Directory Structure

- **src/**: Contains the source code for the Post Service.
  - **controllers/**: Contains the `postController.ts` which handles incoming requests related to posts.
  - **models/**: Contains the `post.ts` model that defines the structure of a post in the database.
  - **routes/**: Contains the `postRoutes.ts` which defines the routes for post-related operations.
  - **services/**: Contains the `postService.ts` which includes the business logic for managing posts.
  - **middlewares/**: Contains the `errorHandler.ts` middleware for handling errors.
  - **utils/**: Contains utility functions related to posts.
  - **index.ts**: The entry point for the Post Service, where the Express server is configured.

## API Endpoints

- **POST /posts**: Create a new post.
- **GET /posts**: Retrieve a list of all posts.
- **POST /posts/:id/like**: Like a specific post.

## Database

The Post Service uses PostgreSQL as its database. The `post` table is defined in the migration scripts located in the `database/migrations/init.sql` file.

## Docker

A Dockerfile is provided to containerize the Post Service. Use the following command to build and run the service:

```bash
docker build -t post-service .
docker run -p 3000:3000 post-service
```

## Installation

To install the necessary dependencies, run:

```bash
npm install
```

## Running the Service

To start the Post Service, use:

```bash
npm start
```

## Testing

Make sure to write unit tests for the Post Service to ensure the functionality works as expected.

## Contributing

Feel free to contribute to the Post Service by submitting issues or pull requests.