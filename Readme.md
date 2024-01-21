# Employee Management System

This project is a simple Employee Management System implemented using Node.js, Express, and MongoDB.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Database Configuration](#database-configuration)
- [API Endpoints](#api-endpoints)

## Introduction

This Employee Management System is a robust application implemented using Node.js, Express, and MongoDB. It provides essential CRUD operations for managing employee records.

Key Features:

- **Auto-incrementing Employee IDs:** The system automatically assigns unique IDs to each employee, simplifying identification and record-keeping.

- **Email Validation:** To ensure data integrity, the system includes email validation using the [validator](https://www.npmjs.com/package/validator) library. This helps maintain accurate and valid email addresses for each employee.

Explore the power of seamless employee data management with auto-incremented IDs and robust email validation.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/): JavaScript runtime
- [Express](https://expressjs.com/): Web application framework for Node.js
- [Mongoose](https://mongoosejs.com/): MongoDB object modeling tool
- [Email Validator](https://www.npmjs.com/package/validator): Library for email validation
- [Mongoose-sequence](https://www.npmjs.com/package/mongoose-sequence): Plugin for auto-incrementing fields in Mongoose
- [MongoDB](https://www.mongodb.com/): NoSQL database (installed and running)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Nishant-371/streeDine.git
   ```

2. Navigate to the project directory:
   ```bash
   cd employee-management-system
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure your MongoDB connection by creating a .env file in the root directory and adding the following:
   ```bash
   DATABASE_URL=your-mongodb-connection-url
   PORT=4000
   ```
5. Start the server:

   ```bash
   npm start

   ```
