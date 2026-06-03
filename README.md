# Retail POS System — Secure Inventory & Billing Backend
Node.js | TypeScript | MongoDB | JWT | RBAC Platform

**Project 1 — Retail POS System**  
A scalable **Retail Point of Sale (POS) Backend System** developed using **Node.js, Express.js, TypeScript, and MongoDB** for secure inventory management, role-based access control, and order processing.

The system enables retail businesses to securely manage users, products, inventory, and billing operations through protected REST APIs with authentication and authorization mechanisms.

---

# 📌 Project Overview

| Field | Details |
|--------|----------|
| **Project Name** | Retail POS System |
| **Role** | Backend Developer |
| **Duration** | 2 Weeks |
| **Status** | ✅ In Progress |
| **Architecture** | REST API Backend |
| **Database** | MongoDB |

---

# 🎯 Problem Statement

Retail stores require a secure and centralized system to:

- Manage products and inventory efficiently
- Restrict access based on employee roles
- Securely authenticate employees
- Process customer purchases
- Automatically update stock after sales
- Prevent unauthorized inventory manipulation

The goal of this project is to build a **secure and scalable backend system** for retail store operations using modern backend technologies.

---

# 🏗️ System Architecture

Designed a modular backend architecture using **Node.js, Express.js, TypeScript, and MongoDB** following REST API principles.

```text
Client Request
      │
      ▼
Express API Server
      │
      ├── Authentication Layer
      │      ├── JWT Authentication
      │      └── RBAC Authorization
      │
      ├── Product Management
      │
      ├── Order Processing
      │
      └── Inventory Logic
             │
             ▼
         MongoDB Database
```

### Backend Structure

```text
backend/
│
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── app.ts
│   └── server.ts
│
├── .env
├── package.json
├── tsconfig.json
├── nodemon.json
└── README.md
```

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|----------|
| **Node.js** | Backend Runtime |
| **Express.js** | REST API Framework |
| **TypeScript** | Type Safety |
| **MongoDB** | Database |
| **Mongoose** | Database Modeling |
| **JWT** | Authentication |
| **bcryptjs** | Password Security |
| **Thunder Client** | API Testing |
| **dotenv** | Environment Variables |
| **CORS** | Cross-Origin Support |

---

# 🗂️ Schema Design

Designed MongoDB schemas for retail POS operations.

### Users Collection

```text
name
email
password
role
timestamps
```

Roles:

```text
Admin
Manager
Cashier
```

### Products Collection

```text
name
price
stock
category
timestamps
```

### Orders Collection

```text
userId
items[]
totalAmount
timestamps
```

### Relationships

```text
User → Creates Orders
Order → Contains Products
Product → Inventory Managed
```

---

# 📅 Sprint Results

## ✅ Week 1 — System Architecture, Schema Design & Authentication

### Objective:
Build backend foundation, database schemas, and secure authentication system.

### 🏗️ System Architecture

- Designed modular backend architecture
- Structured project using MVC pattern
- Configured Express server with TypeScript
- Connected MongoDB database

### 🗂️ Schema Design

Implemented MongoDB collections for:

- Users
- Products
- Orders

Designed schema relationships between:

```text
Users → Orders → Products
```

### 🔐 Authentication & Security

Implemented secure authentication system.

Completed:

- User Registration API
- User Login API
- JWT Authentication
- Password Hashing using bcryptjs
- Protected Routes
- Role-Based Access Control (RBAC)

### RBAC Roles

| Role | Permissions |
|------|-------------|
| **Admin** | Full Access |
| **Manager** | Product & Order Management |
| **Cashier** | Order Creation Only |

### Authentication Flow

```text
Register User
      ↓
Password Encrypted
      ↓
Login User
      ↓
JWT Token Generated
      ↓
Protected Route Access
```

### Gate Check: ✅ PASSED

```text
MongoDB Connected ✅
Authentication Working ✅
JWT Authorization Working ✅
RBAC Implemented ✅
Protected Routes Working ✅
```

---

## ✅ Week 2 — Core API Development & Inventory Logic

### Objective:
Develop retail APIs and implement inventory management system.

### ⚙️ Core API Development

Implemented REST APIs for:

### Authentication APIs

| Method | Endpoint |
|---------|-----------|
| POST | `/api/auth/register` |
| POST | `/api/auth/login` |

### Product APIs

| Method | Endpoint | Access |
|---------|-----------|--------|
| POST | `/api/products` | Admin, Manager |
| GET | `/api/products` | Logged-in Users |
| PUT | `/api/products/:id` | Admin, Manager |
| DELETE | `/api/products/:id` | Admin |

### Order APIs

| Method | Endpoint | Access |
|---------|-----------|--------|
| POST | `/api/orders` | Admin, Manager, Cashier |
| GET | `/api/orders` | Admin, Manager |

### 📦 Inventory Logic

Implemented POS inventory workflow.

Features:

- Product CRUD Operations
- Automatic Stock Reduction
- Order Creation
- Total Bill Calculation
- Inventory Validation

### POS Workflow

```text
Customer Purchase
        ↓
Validate Product Stock
        ↓
Calculate Total Amount
        ↓
Reduce Product Stock
        ↓
Save Order in Database
```

Example:

```text
Mouse Stock = 15
Customer Purchase = 2
Updated Stock = 13
```

Implemented Logic:

✅ Stock Validation Before Purchase  
✅ Prevent Insufficient Stock Orders  
✅ Automatic Inventory Updates  
✅ Order Storage in MongoDB

### 🧪 API Testing

Tested APIs using **Thunder Client**.

Validated:

✅ Register/Login APIs  
✅ JWT Protected Routes  
✅ Product CRUD APIs  
✅ Order APIs  
✅ Role Restrictions

### Gate Check: ✅ PASSED

```text
Product CRUD → Working ✅
Order Creation → Working ✅
Inventory Reduction → Working ✅
POS Billing → Working ✅
RBAC Restrictions → Working ✅
```

---

# 🚀 Current Features

✅ User Authentication  
✅ JWT Authorization  
✅ RBAC Security  
✅ Product Management  
✅ Inventory Management  
✅ POS Billing Backend  
✅ Automatic Stock Updates  
✅ MongoDB Integration

---

# 🔮 Future Enhancements

- React Frontend Dashboard
- Payment Gateway Integration
- History Generating
- Invoice Generation
- Sales Analytics
- Docker Containerization
- Kubernetes Deployment

---

# 👩‍💻 Author

**Haripriya Sankar**  
Software Developer | Backend Developer | Java & MERN Enthusiast

GitHub: https://github.com/haripriyasankar-bit
```typescript
