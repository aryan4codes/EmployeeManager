# Employee Manager

## Overview

Employee Manager is a web application designed for managing employee data. It consists of a Spring Boot backend for handling data operations and a React frontend for user interactions. The application supports basic authentication and is containerized using Docker for consistent deployment.

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
   git clone https://github.com/yourusername/employeemanager_backend.git_
   cd employeemanager
