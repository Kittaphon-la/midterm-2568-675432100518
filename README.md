# Student Management System - Layered Architecture

## 📋 Project Information

* **Student Name:** Kittaphon Laemthai
* **Student ID:** 67543210051-8
* **Course:** ENGSE207 Software Architecture

---

## 🏗️ Architecture Style

This project uses **Layered Architecture (3-tier)** consisting of:

ประกอบด้วย 3 ชั้นหลัก:

- Presentation Layer

- Business Layer

- Data Layer

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

### 🔴 ปัญหาของ Monolithic (เดิม)

- โค้ดทุกอย่างอยู่ในไฟล์เดียว ทำให้ดูแลยาก

- แก้ไข logic หนึ่งกระทบทั้งระบบ

- ไม่สามารถแยกทีมพัฒนาได้

- ทดสอบแต่ละส่วนแยกกันไม่ได้

- ขยายระบบในอนาคตได้ยาก

---

### ✅ วิธีแก้ไขด้วย Layered Architecture
ปัญหา(*)       	วิธีแก้ (-)
* โค้ดปนกันหมด	- แยกเป็น 3 Layer ชัดเจน
* ดูแลยาก	 - แยก Controller, Service, Repository
* แก้แล้วพังทั้งระบบ  	- แต่ละ Layer ทำงานอิสระ
* ทดสอบยาก	- สามารถ Test แยกแต่ละ Layer
* ขยายยาก	- เพิ่ม Feature ได้ง่าย

---

### 🌟 ประโยชน์ที่ได้รับ

* โค้ดเป็นระเบียบ อ่านง่าย

* ดูแลและแก้ไขสะดวก

* รองรับการขยายระบบในอนาคต

* รองรับการทำงานเป็นทีม

* เป็นมาตรฐานที่ใช้จริงในองค์กร

---

## 🚀 How to Run

```bash
# 1. Clone repository
git clone https://github.com/Kittaphon-la/midterm-individual-675432100518.git

# 2. เข้าโฟลเดอร์
cd midterm-individual-675432100518

# 3. Install dependencies
npm install

# 4. Run server
npm start

# Server will run at
http://localhost:3000
```

---

## 📝 API Endpoints

| Method | Endpoint                 |
| ------ | ------------------------ |
| GET    | /api/students            |
| GET    | /api/students/5       |
| POST   | /api/students            |
| PUT    | /api/students/5       |
| PATCH  | /api/students/5/gpa    |
| PATCH  | /api/students/5/status |
| DELETE | /api/students/5       |

---

## ✅ Features

* CRUD Operations
* SQLite Database
* Validation Layer
* Error Handling Middleware
* Layered Architecture

---


