# Retail POS System Backend

A scalable **Retail Point of Sale (POS) Backend System** built using **Node.js, Express.js, TypeScript, MongoDB, and JWT Authentication**. This project provides secure authentication, role-based access control (RBAC), inventory management, and order processing for retail businesses.

## Features

### Authentication & Security
- User Registration and Login
- JWT Authentication
- Password Encryption using bcryptjs
- Protected Routes
- Role-Based Access Control (RBAC)

### User Roles
- **Admin** – Full access to the system
- **Manager** – Manage products and orders
- **Cashier** – Create orders and view products

### Product Management
- Add Products
- View Products
- Update Product Details
- Delete Products
- Inventory Management

### Order Management (POS Billing)
- Create Orders
- Multiple Product Purchase
- Automatic Total Bill Calculation
- Automatic Stock Reduction
- View Order History

## Tech Stack

### Backend
- Node.js
- Express.js
- TypeScript

### Database
- MongoDB
- Mongoose

### Authentication & Security
- JWT (JSON Web Token)
- bcryptjs
- Helmet

### Middleware & Utilities
- Morgan
- CORS
- dotenv
- express-validator

## Project Structure

```text
backend/
│── src/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── app.ts
│   ├── server.ts
│
│── .env
│── package.json
│── tsconfig.json
│── nodemon.json

