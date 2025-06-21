# Database Documentation

This directory contains the necessary SQL scripts for initializing and seeding the PostgreSQL database used in the social network application.

## Migrations

- **`migrations/init.sql`**: This script is responsible for creating the necessary tables in the database. It includes the definitions for the following tables:
  - **Users**: Stores user information such as username, password, first name, last name, birth date, and alias.
  - **Posts**: Stores posts made by users, including the message, user ID, and creation date.
  - **Likes**: (If implemented) Stores the likes associated with posts, linking users to the posts they liked.

## Seeders

- **`seeders/seedUsers.sql`**: This script is used to insert predefined test users into the database. It helps in quickly populating the database with sample data for development and testing purposes.

## Usage

To initialize the database, run the `init.sql` script after creating the database in PostgreSQL. After that, you can run the `seedUsers.sql` script to populate it with test data.

Make sure to adjust the database connection settings in your application to match the database you are using.