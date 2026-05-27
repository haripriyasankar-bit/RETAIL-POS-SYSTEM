# Retail POS System — Secure Inventory & Billing Backend
Node.js Status MongoDB JWT RBAC Platform

**Project 1 — Retail POS System**  
A scalable **Retail Point of Sale (POS) Backend System** built using **Node.js, Express.js, TypeScript, MongoDB, and JWT Authentication** for secure user management, inventory control, and POS billing automation.

---

## 📌 Project Overview

| Field | Details |
|--------|----------|
| **Project Name** | Retail POS System |
| **Role** | Backend Developer |
| **Duration** | 2 Weeks |
| **Status** | ✅ Completed |
| **Architecture** | REST API Backend |

---

## 🎯 Problem Statement

Retail stores require a secure and centralized backend system to:

- Manage inventory efficiently
- Restrict access based on employee roles
- Process customer orders securely
- Reduce stock automatically after purchase
- Prevent unauthorized product manipulation

The system required:

- Secure authentication
- Role-based access control
- Inventory CRUD operations
- Order processing and stock management
- Protected API endpoints

---

## 🏗️ System Architecture

```text
┌────────────────────────────────────┐
│          Retail POS Backend        │
│                                    │
│  ┌──────────────────────────────┐  │
│  │ Authentication Service       │  │
│  │ - Register/Login             │  │
│  │ - JWT Authentication         │  │
│  │ - RBAC Authorization         │  │
│  └──────────────────────────────┘  │
│                                    │
│  ┌──────────────────────────────┐  │
│  │ Product Management           │  │
│  │ - Add Product                │  │
│  │ - Update Product             │  │
│  │ - Delete Product             │  │
│  │ - Inventory Tracking         │  │
│  └──────────────────────────────┘  │
│                                    │
│  ┌──────────────────────────────┐  │
│  │ Order Management             │  │
│  │ - Create Orders              │  │
│  │ - Billing Calculation        │  │
│  │ - Stock Reduction            │  │
│  │ - Order History              │  │
│  └──────────────────────────────┘  │
└────────────────────────────────────┘


| Technology     | Purpose               |
| -------------- | --------------------- |
| **Node.js**    | Backend Runtime       |
| **Express.js** | REST API Framework    |
| **TypeScript** | Type Safety           |
| **MongoDB**    | Database              |
| **Mongoose**   | Database Modeling     |
| **JWT**        | Authentication        |
| **bcryptjs**   | Password Hashing      |
| **Helmet**     | Security Middleware   |
| **Morgan**     | Request Logging       |
| **CORS**       | Cross-Origin Requests |
| **dotenv**     | Environment Variables |


📅 Sprint Results
✅ Week 1 — Authentication & Security

Objective: Build secure login system with RBAC

Completed:

User Registration API
Login API
Password Hashing using bcryptjs
JWT Token Authentication
Protected Routes
Role-Based Access Control (RBAC)


Implemented Roles:

Admin → Full Access
Manager → Product & Order Access
Cashier → Order Creation Only

Gate Check: ✅ PASSED

Register API → Working ✅
Login API → Working ✅
JWT Authentication → Working ✅
Admin Route Protection → Working ✅

✅ Week 2 — Inventory & POS Billing

Objective: Implement inventory and order processing

Product Management

Implemented APIs:

| Method | Endpoint          | Access          |
| ------ | ----------------- | --------------- |
| POST   | /api/products     | Admin, Manager  |
| GET    | /api/products     | Logged-in Users |
| PUT    | /api/products/:id | Admin, Manager  |
| DELETE | /api/products/:id | Admin           |


Order Management

Implemented APIs:

| Method | Endpoint    | Access                  |
| ------ | ----------- | ----------------------- |
| POST   | /api/orders | Admin, Manager, Cashier |
| GET    | /api/orders | Admin, Manager          |


Features:

Create Customer Orders
Multiple Product Purchase
Automatic Total Bill Calculation
Automatic Stock Reduction
Order History Tracking

Gate Check: ✅ PASSED
Product CRUD → Working ✅
Inventory Management → Working ✅
Order Creation → Working ✅
Stock Auto Reduction → Working ✅
RBAC Restrictions → Working ✅

🔐 Role-Based Access Control (RBAC)
| Role        | Permissions                   |
| ----------- | ----------------------------- |
| **Admin**   | Full system access            |
| **Manager** | Manage inventory & orders     |
| **Cashier** | Create orders & view products |






