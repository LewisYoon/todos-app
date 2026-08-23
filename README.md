# Todos App

Todos App is a full-stack task management application built with Spring Boot and React TypeScript.

The application provides a RESTful API for managing todos and categories, with a responsive frontend for creating, viewing, updating, and deleting tasks.

This project was developed as part of the \_nology bootcamp to demonstrate full-stack development using Java, Spring Boot, MySQL, React, and TypeScript.

## Features

### Todo Management

- Create new todos
- View all todos
- View a single todo by ID
- Update existing todos
- Delete todos
- Assign todos to categories
- Filter todos by category (to be done)

### Category Management

- Create categories
- View all categories
- View a single category
- Delete categories
- Assign categories to todos

### Frontend

- React TypeScript frontend
- Reusable React components
- RESTful API integration
- Todo and category management
- Responsive user interface

### API Documentation

- OpenAPI / Swagger API documentation

## Screenshots

### Todo Card

### Category Card

### Full Screen Shot

### Swagger API Documentation

## Built With

### Frontend

- React
- TypeScript
- Vite
- CSS

### Backend

- Java 17
- Spring Boot 4.1.0
- Spring Web MVC
- Spring Data JPA
- Jakarta Validation
- Maven
- ModelMapper

### Database

- MySQL

### API Documentation

- SpringDoc OpenAPI
- Swagger UI

## API Endpoints

### Categories

| Method | Endpoint           | Description          |
| ------ | ------------------ | -------------------- |
| GET    | `/categories`      | Get all categories   |
| GET    | `/categories/{id}` | Get a category by ID |
| POST   | `/categories`      | Create a category    |
| DELETE | `/categories/{id}` | Delete a category    |

### Todos

| Method | Endpoint      | Description      |
| ------ | ------------- | ---------------- |
| GET    | `/todos`      | Get all todos    |
| GET    | `/todos/{id}` | Get a todo by ID |
| POST   | `/todos`      | Create a todo    |
| PATCH  | `/todos/{id}` | Update a todo    |
| DELETE | `/todos/{id}` | Delete a todo    |

## Database

The application uses MySQL for persistent data storage.

### Category

```text
Category
- id
- name
- createdAt
- updatedAt
```

### Todo

```text
Todo
- id
- title
- category
```

A `Todo` belongs to a `Category` through a many-to-one relationship.

## API Documentation

Swagger UI is available when the Spring Boot application is running.

Open:

```text
http://localhost:8080/swagger-ui/index.html
```

The OpenAPI documentation provides an interactive interface for viewing and testing the REST API endpoints.

## How to Run

### Prerequisites

Make sure you have the following installed:

- Java 17
- Maven
- MySQL
- Node.js
- npm

### 1. Clone the repository

```bash
git clone <repository-url>
cd todos-app
```

### 2. Configure MySQL

Create the database:

```sql
CREATE DATABASE nology_todo;
```

Update the database configuration in:

```text
src/main/resources/application.properties
```

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/nology_todo
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
```

### 3. Run the Spring Boot API

From the backend project root:

```bash
./mvnw spring-boot:run
```

The backend will run on:

```text
http://localhost:8080
```

### 4. Run the React frontend

Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

## Development

The frontend communicates with the Spring Boot REST API through HTTP requests.

```text
React + TypeScript
       |
       | HTTP Requests
       v
Spring Boot REST API
       |
       | Spring Data JPA
       v
     MySQL
```

## Backend Dependencies

The backend uses the following main dependencies:

- Spring Boot Starter Data JPA
- Spring Boot Starter Validation
- Spring Boot Starter Web MVC
- MySQL Connector/J
- Spring Boot DevTools
- SpringDoc OpenAPI / Swagger UI
- ModelMapper

## Data Seeding

The application includes development data seeders for creating initial categories and todos.

Seeders are enabled under the `dev` Spring profile.

Example initial categories:

```text
exercise
study
```

Example todo:

```text
bench press
```

## Testing

Automated tests have not been implemented yet.

Testing is planned as a future improvement.

## Future Improvements

- Add automated backend tests using JUnit, Mockito, and REST Assured
- Add frontend tests using Vitest and React Testing Library
- Add stronger form validation and user-friendly validation messages
- Improve loading and error states in the frontend
- Add todo completion status
- Improve category filtering UI
- Add authentication and user-specific todos
- Add production deployment
- Improve API logging and monitoring
