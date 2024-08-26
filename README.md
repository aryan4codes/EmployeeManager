
# ManageYourEmployee.io

## Overview

ManageYourEmployee.io is a web application designed for managing employee data. It consists of a Spring Boot backend for handling data operations and a React frontend for user interactions. The application supports basic authentication and is containerized using Docker for consistent deployment.

## Features

- **Backend**:
  - RESTful API for CRUD operations on employee data
  - Basic authentication for securing endpoints
  - Configured with CORS to allow requests from the frontend

- **Frontend**:
  - Form handling with validation using Formik and Yup
  - Consumes backend APIs to manage employee data
  - Manages authentication state using React Context API

## Technologies

- **Backend**: Spring Boot, Java 21
- **Frontend**: React, Axios, Formik, Yup
- **Database**: In-memory (for demo purposes)
- **Containerization**: Docker

## Getting Started

### Prerequisites

- Java 21
- Node.js and npm
- Docker

### Backend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/manage-youremployee-backend.io.git
   cd manage-youremployee.io
   ```

2. **Build the JAR file**:
   ```bash
   ./mvnw clean package
   ```

   This command compiles the code and packages it into a JAR file located in the `target` directory.

3. **Run the application locally**:
   ```bash
   ./mvnw spring-boot:run
   ```

   This command starts the Spring Boot application, which will be accessible at `http://localhost:8080`.

4. **Dockerize the application** (optional):
   - **Build the Docker image**:
     ```bash
     docker build -t manage-your-employee .
     ```
   - **Run the Docker container**:
     ```bash
     docker run -p 8080:8080 manage-your-employee
     ```

### Frontend Setup

1. **Navigate to the frontend directory**:
   ```bash
   cd path/to/frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the React application**:
   ```bash
   npm start
   ```

   This command starts the React development server, accessible at `http://localhost:3000`.

## API Endpoints

- **Create Employee**: `POST /admins/{username}/employees`
- **Retrieve Employee**: `GET /admins/{username}/employees/{id}`
- **Update Employee**: `PUT /admins/{username}/employees/{id}`
- **Delete Employee**: `DELETE /admins/{username}/employees/{id}`
- **Basic Auth Check**: `GET /basicauth`

## Docker Commands

- **Build Docker Image**:
  ```bash
  docker build -t manage-your-employee .
  ```

- **Push Docker Image**:
  ```bash
  docker tag manage-your-employee yourdockerhubusername/manage-your-employee:latest
  docker push yourdockerhubusername/manage-your-employee:latest
  ```

## Contributing

Feel free to submit issues or pull requests if you find bugs or suggest improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, please contact [rajpurkar32@gmail.com](mailto:rajpurkar32@gmail.com).
```
