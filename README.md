# Student Management System - Layered Architecture

## 📋 Project Information

* **Student Name:** Kittaphon Laemthai
* **Student ID:** 67543210051-8
* **Course:** ENGSE207 Software Architecture

---

## 🏗️ Architecture Style

This project uses **Layered Architecture (3-tier)** consisting of:

ประกอบด้วย 3 ชั้นหลัก:

Presentation Layer

Business Layer

Data Layer

---

## 📂 Project Structure

```
midterm-individual-675432100518/
├── src/
│   ├── presentation/
│   │   ├── routes/              # API routes
│   │   ├── controllers/         # HTTP controllers
│   │   └── middlewares/         # Error handler
│   │
│   ├── business/
│   │   ├── services/            # Business logic
│   │   └── validators/          # Input validation
│   │
│   └── data/
│       ├── repositories/        # Database operations
│       └── database/            # SQLite connection
│
├── server.js                    # Entry point
├── students.db                 # SQLite database
├── package.json
└── README.md
```

---

## 🎯 Refactoring Summary

### 🔴 Problems with Monolithic Architecture
ปัญหาของ Monolithic (เดิม)

โค้ดทุกอย่างอยู่ในไฟล์เดียว ทำให้ดูแลยาก

แก้ไข logic หนึ่งกระทบทั้งระบบ

ไม่สามารถแยกทีมพัฒนาได้

ทดสอบแต่ละส่วนแยกกันไม่ได้

ขยายระบบในอนาคตได้ยาก

---

### ✅ Solution using Layered Architecture

* Separated concerns into 3 layers
* Business logic isolated in services
* Database access isolated in repositories
* Controllers only handle HTTP logic

---

### 🌟 Benefits

* Easier to maintain and extend
* Clear separation of responsibilities
* Easy to test and debug
* Professional architecture style

---

## 🚀 How to Run

```bash
# Install dependencies
npm install

# Run server
npm start

# Server will run at
http://localhost:3000
```

---

## 📝 API Endpoints

| Method | Endpoint                 |
| ------ | ------------------------ |
| GET    | /api/students            |
| GET    | /api/students/:id        |
| POST   | /api/students            |
| PUT    | /api/students/:id        |
| PATCH  | /api/students/:id/gpa    |
| PATCH  | /api/students/:id/status |
| DELETE | /api/students/:id        |

---

## ✅ Features

* CRUD Operations
* SQLite Database
* Validation Layer
* Error Handling Middleware
* Layered Architecture

---

## 🎓 Conclusion

This project demonstrates a refactoring from Monolithic Architecture to Layered Architecture following software architecture best practices.
