# 🛒 Omnichannel Retail POS & Inventory Management System

> A cloud-native, full-stack Point of Sale and Inventory Management System built for the Infotact Technical Internship Program. This platform unifies physical and digital retail operations into a single source of truth, with real-time inventory tracking, role-based access control, and secure transaction processing.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Development Progress](#development-progress)
  - [Week 1 — Foundation, Auth & Core APIs](#week-1--foundation-auth--core-apis)
  - [Week 2 — Inventory Engine & Advanced APIs](#week-2--inventory-engine--advanced-apis-in-progress)
- [API Reference](#api-reference)
- [Database Schema](#database-schema)
- [Environment Setup](#environment-setup)
- [Folder Structure](#folder-structure)

---

## Project Overview

Modern retail businesses transitioning to digital models frequently face systemic bottlenecks from fragmented legacy software — inaccurate inventory across stores, disconnected pricing, and slow POS terminals. This system addresses those challenges by providing:

- 🔄 Real-time inventory synchronization after every transaction
- 🔐 Secure, role-based access for Cashiers, Managers, and Admins
- 🧾 Atomic order processing with automatic stock decrement
- 📦 Centralized product catalog with full CRUD support
- 📊 Foundation for a business intelligence dashboard (upcoming)

---

## Tech Stack

| Layer | Technology | Reason |
|---|---|---|
| **Frontend** | React.js, Tailwind CSS | Reusable components, responsive POS UI |
| **Backend** | Node.js, Express.js, TypeScript | Async runtime ideal for I/O-heavy transactions; compile-time type safety |
| **Database** | MongoDB via Mongoose ODM | Flexible NoSQL schema; structured ODM layer for data integrity |
| **Caching** | Redis | In-memory caching for product catalog reads |
| **Auth** | JWT + bcrypt | Stateless, secure token-based authentication |
| **DevOps** | Docker, GitHub Actions, Vercel/AWS | Containerized environments; automated CI/CD |

---

## Development Progress

### Week 1 — Foundation, Auth & Core APIs

**Sprint Goal:** Establish foundational infrastructure, database schema, authentication system, RBAC middleware, and core product/order APIs.

---

#### ✅ Repository & Environment Setup

- Initialized GitHub repository with branch protection rules (PRs required for merges to `main`)
- Configured monorepo structure separating `/client` (React) and `/server` (Express + TypeScript)
- Dockerized local development environment to spin up MongoDB and Redis instances consistently across platforms
- Established `.env`-based configuration with `.env.example` for onboarding

---

#### ✅ Database Schema Design (Mongoose ODM)

Designed and implemented the following core Mongoose collections:

**`User`**
- Fields: `name`, `email`, `password` (bcrypt hashed), `role` (`cashier | manager | admin`), `storeId`, `timestamps`
- Indexes: `email` (unique), `role`

**`Product`**
- Fields: `name`, `description`, `sku`, `price`, `category`, `variants` (size/color), `stockQuantity`, `storeId`, `timestamps`
- Indexes: `sku` (unique), `name` (text index for search)

**`Order`**
- Fields: `items` (array of `{ productId, quantity, unitPrice }`), `totalAmount`, `cashierId`, `storeId`, `paymentMethod`, `status`, `timestamps`
- References: `User` (cashier), `Product` (line items)

> Schema decisions prioritize high-frequency query patterns — text indexes on product name for barcode-simulated search, and store-scoped indexes for multi-location filtering.

---

#### ✅ Authentication System

Implemented a stateless, JWT-based authentication mechanism:

- **`POST /api/auth/register`** — Creates a new user; password hashed with `bcrypt` (salt rounds: 10)
- **`POST /api/auth/login`** — Validates credentials, returns signed JWT (expiry: 7 days)
- JWT payload includes `userId`, `role`, and `storeId` for downstream RBAC checks
- `verifyToken` middleware extracts and validates the token on all protected routes

---

#### ✅ Role-Based Access Control (RBAC)

Implemented a granular RBAC middleware layer (`authorizeRoles.ts`) that enforces permissions at the route level:

| Role | Permissions |
|---|---|
| `cashier` | Create orders, view products |
| `manager` | All cashier permissions + manage products + view inventory |
| `admin` | Full system access including user management and reports |

Usage example:
```typescript
