# i-Computers - E-Commerce Backend API

## 📌 Project Overview

i-Computers Backend is a RESTful API server developed for the i-Computers e-commerce application.

This backend was developed as part of my software development course to handle application data, user authentication, product management, orders, and reviews.

The project follows a structured backend architecture using Node.js, Express.js, and MongoDB.

---

# 🚀 Features

## User Management

- User registration
- User login authentication
- JWT based authentication
- Password encryption using bcrypt
- User profile handling
- OTP model support
- Email-related services using Nodemailer

---

## Product Management

- Create products
- Retrieve products
- Update products
- Delete products
- Product information management

---

## Order Management

- Create customer orders
- Manage order information
- Retrieve order details
- Handle order-related operations

---

## Review Management

- Add product reviews
- Manage customer feedback
- Retrieve product reviews

---

# 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| Node.js | Backend runtime environment |
| Express.js | REST API framework |
| MongoDB | Database management |
| Mongoose | MongoDB object modeling |
| JavaScript (ES6+) | Backend development |
| JWT | User authentication |
| bcrypt | Password hashing |
| Nodemailer | Email services |
| Axios | HTTP requests |
| dotenv | Environment variable management |
| CORS | Cross-origin communication |

---

# 🏗️ Backend Architecture

The project follows a modular structure:

```
Client Application
        |
        |
    REST API
        |
        |
   Express Server
        |
 --------------------
 |                  |
Controllers       Routes
 |
 |
Models
 |
 |
MongoDB Database
```

---

# 📂 Project Structure

```
i-computers-backend
│
├── controllers
│   ├── userController.js
│   ├── productController.js
│   ├── orderController.js
│   └── reviewController.js
│
├── models
│   ├── User.js
│   ├── Product.js
│   ├── Review.js
│   ├── order.js
│   └── Otp.js
│
├── routes
│   ├── userRouter.js
│   ├── productRouter.js
│   ├── orderRouter.js
│   └── reviewRouter.js
│
├── index.js
├── package.json
└── README.md
```

---

# 🔐 Authentication System

The backend implements JWT authentication.

Authentication flow:

```
User Login
    |
    |
Validate Credentials
    |
    |
Generate JWT Token
    |
    |
Send Token To Client
    |
    |
Authorize Protected Routes
```

Security features:

- Password hashing
- Token verification
- Protected API routes
- Environment variable protection

---

# 🌐 API Modules

## User API

Handles:

- Registration
- Login
- User data

---

## Product API

Handles:

- Product creation
- Product retrieval
- Product updates
- Product deletion

---

## Order API

Handles:

- Order creation
- Order management
- Order details

---

## Review API

Handles:

- Review creation
- Review retrieval

---

# ⚙️ Installation & Setup

## Requirements

Install:

- Node.js
- MongoDB

---

## Clone Repository

```bash
git clone <repository-url>
```

---

## Navigate To Backend Folder

```bash
cd i-computers-backend
```

---

## Install Dependencies

```bash
npm install
```

---

# 🔑 Environment Configuration

Create a `.env` file:

```
MONGO_URL=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# ▶️ Running Application

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

Server runs on:

```
http://localhost:3000
```

---

# 🧪 Testing

Testing can be implemented using:

- Jest
- Supertest

Future testing areas:

- API endpoint testing
- Authentication testing
- Database operation testing

---

# 💡 Development Concepts Practiced

Through this backend project, I practiced:

## Backend Development

- REST API development
- Express middleware
- Routing
- Controllers
- Database models

## Database Management

- MongoDB integration
- Mongoose schemas
- CRUD operations

## Security

- Authentication systems
- Password encryption
- JWT authorization

## Software Engineering

- Backend architecture
- Code organization
- API design

---

# 🎯 Learning Outcomes

By completing this project, I gained practical experience in:

✅ Building Node.js backend applications  
✅ Creating RESTful APIs  
✅ Connecting applications with MongoDB  
✅ Implementing authentication systems  
✅ Designing scalable backend structures  
✅ Managing CRUD operations  
✅ Connecting frontend and backend systems  

---

# 🔮 Future Improvements

Possible enhancements:

- API documentation using Swagger
- Automated API testing
- Role-based authorization
- Advanced error handling
- Rate limiting
- Logging system
- Cloud database optimization

---

# 👨‍💻 Author

**Gaurawa Mihiranga**

Computer Engineering Undergraduate

---

# 📌 Project Type

Course Project - Node.js Backend REST API
