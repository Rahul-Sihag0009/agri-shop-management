# 🌾 Agri Shop Management System

A full-stack Agri Shop Management System built using React, Node.js, Express, Prisma, and PostgreSQL. The application helps agricultural retail shops manage inventory, billing, customers, users, and reports efficiently.

---

## 📸 Project Preview

> Add screenshots here after deployment.

---

# ✨ Features

## 🔐 Authentication
- Secure JWT Authentication
- Admin & Staff Login
- Role-Based Access Control

## 👤 User Management
- Admin can create Staff accounts
- Admin can change Staff passwords
- Admin can delete Staff accounts
- Staff have limited permissions

## 📦 Product Management
- Add Products
- Update Products
- Delete Products
- Batch Number Management
- GST Support
- HSN Code
- Minimum Stock Alerts

## 📊 Inventory Management
- Stock In
- Stock Out
- Stock History
- Current Inventory Tracking

## 🧾 Billing System
- Generate GST Invoice
- Sequential Invoice Numbers
- Invoice Prefix from Settings
- Print Invoice
- Download Invoice as PDF
- Customer Billing History

## 💰 Payment Modes
- Cash
- UPI
- Unpaid

## 👥 Customer Management
- Add Customers
- Update Customers
- Delete Customers
- Customer Purchase History

## 📈 Reports
- Sales Report
- Inventory Report
- Dashboard Statistics

## ⚙️ Settings
- Shop Information
- Shop Logo Upload
- GST Number
- Currency
- Invoice Prefix

---

# 🛠 Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router
- Axios
- React Query
- React Hook Form
- React Hot Toast

### Backend
- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- JWT Authentication
- bcrypt

---

# 📂 Project Structure

```
agri-shop-management
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── prisma
│   ├── routes
│   ├── services
│   ├── uploads
│   └── server.js
│
├── frontend
│   ├── src
│   ├── public
│   └── vite.config.js
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/Rahul-Sihag0009/agri-shop-management.git
```

## Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```env
DATABASE_URL=your_database_url
JWT_SECRET=your_secret
PORT=5000
```

Run:

```bash
npx prisma generate
npx prisma migrate dev
npm run dev
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# 🔐 Environment Variables

Backend

```env
DATABASE_URL=
JWT_SECRET=
PORT=
```

Frontend

```env
VITE_API_URL=
```

---

# 👨‍💻 Author

**Rahul Sihag**

B.Tech Computer Science Engineering

---

# 📄 License

This project is developed for educational and commercial purposes.