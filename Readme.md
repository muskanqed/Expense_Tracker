# 💰 Expense Tracker

A full-stack **Expense Tracker** application to help users manage their personal finances by tracking income and expenses with a clean and intuitive interface.

## 🚀 Features

- **User Authentication & Authorization**

  - Secure login & signup using JWT tokens.
  - Password hashing with bcrypt.

- **Profile Management**

  - Upload and store profile pictures using Multer.
  - Access profile images via public URLs.

- **Transaction Management**

  - Add, edit, and delete income/expenses.
  - Categorize transactions for better analysis.
  - View all transactions in an organized dashboard.

- **Data Storage**

  - MongoDB Atlas for cloud database.
  - Mongoose for schema modeling & queries.

- **Frontend**

  - Built with React.js for fast and responsive UI.
  - Styled with Tailwind CSS for a modern, responsive UI.

- **Backend**
  - Node.js + Express.js REST API.
  - MVC architecture for clean separation of concerns.

---

## 🛠 Tech Stack

**Frontend:** React.js, Tailwind CSS, React Icons
**Backend:** Node.js, Express.js, Multer, Bcrypt, JWT
**Database:** MongoDB Atlas (Mongoose ORM)

---

## ⚙️ Installation & Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/muskanqed/Expense_Tracker

   ```

2. **Backend setup**
   ```bash
   cd backend
   npm install
   npm run dev
   ```
3. **Frontend setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
4. **Environment Variables**

```
Create a .env file in backend directory:
MONGO_URI=your-mongodb-atlas-uri
JWT_SECRET=your-secret-key
PORT=5000

```
