# Express PostgreSQL CRUD REST API

A simple and scalable CRUD REST API built using Node.js, Express.js, and PostgreSQL.

This project demonstrates how to create REST APIs for performing Create, Read, Update, and Delete (CRUD) operations with PostgreSQL as the database.

---

# Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Postman

---

# Prerequisites

Before running this project, make sure the following tools are installed:

- Node.js
- PostgreSQL
- npm

You can either:

- Install PostgreSQL directly on your machine, or
- Run PostgreSQL using Docker

---

# PostgreSQL Setup

## Step 1: Create Database User

Run the following SQL command inside PostgreSQL:

```sql
CREATE USER express WITH ENCRYPTED PASSWORD 'postgres';
```

---

## Step 2: Create Database

Create a new database and assign ownership to the created user:

```sql
CREATE DATABASE express_js OWNER express;
```

---

# Install Project Dependencies

Navigate to the project root directory and install dependencies:

```bash
npm install
```

---

# Start the Express Server

Run the development server using the following command:

```bash
npm run dev
```

Once the server starts successfully, the API will be available locally.

---

# API Testing Using Postman

A Postman collection is included in the project for testing APIs.

Import the following collection into Postman:

```text
./postman/Express_Postgres_CRUD.postman_collection.json
```

The collection contains sample APIs for:

- Create records
- Fetch records
- Update records
- Delete records

---

# Features

- RESTful CRUD APIs
- PostgreSQL integration
- Express middleware support
- Easy local setup
- Postman collection included
- Beginner-friendly project structure

---

# Project Structure

```text
express-postgres-crud-api/
├── postman/
│   └── Express_Postgres_CRUD.postman_collection.json
├── src/
│   ├── configs/
│   ├── controllers/
│   ├── data/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── index.js
├── package-lock.json
├── package.json
└── README.md
```

---

# Useful Commands

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

## Start Production Server

```bash
npm start
```

---

# Goal of This Project

This project is designed to help developers understand:

- How to build REST APIs using Express.js
- How to connect Node.js with PostgreSQL
- How CRUD operations work in backend applications
- How to structure a scalable Express project
- How to test APIs using Postman