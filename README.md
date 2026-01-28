# 🧑‍💼 Employee TODO Application

A modern **Full Stack Employee Management Application** built with  
**React 18 + Spring Boot 3 + MySQL**.

🔹 CRUD Operations  
🔹 Real-time Search  
🔹 Responsive UI  
🔹 REST API Architecture

## ✨ Features

- Add, edit, delete employees
- Real-time search
- Responsive design
- Confirmation modals
- Form validation

## 🛠️ Tech Stack

### Frontend
- React 18
- Tailwind CSS
- Axios

### Backend
- Spring Boot 3
- Spring Data JPA
- MySQL

## 📁 Project Structure

Employee-TODO-Application/
│
├── frontend/                    # React Vite Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Modal.jsx
│   │   │   ├── ConfirmationModal.jsx
│   │   │   └── ...
│   │   ├── pages/
│   │   │   └── Todo.jsx
│   │   ├── api/
│   │   │   └── Api.js
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   ├── tailwind.config.js
│   └── README.md (optional)
│
├── backend/                     # Spring Boot Backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/Libs/TODO/
│   │   │   │   ├── Controller/
│   │   │   │   │   └── TodoController.java
│   │   │   │   ├── Service/
│   │   │   │   │   └── TodoService.java
│   │   │   │   ├── Repository/
│   │   │   │   │   └── TodoRepository.java
│   │   │   │   ├── Entity/
│   │   │   │   │   └── Todo.java
│   │   │   │   └── TodoApplication.java
│   │   │   └── resources/
│   │   │       ├── application.properties
│   │   │       └── ...
│   │   └── test/
│   └── pom.xml
│
├── screenshots/                 # Project screenshots
│   ├── web-homepage.png
│   ├── edit-modal.png
│   ├── delete-confirm.png
│   └── mobile-homepage.png
|
├── .gitignore
└── README.md                    # MAIN README

## 🚀 Installation & Setup

### **Prerequisites**
- Node.js (v16 or higher)
- Java JDK 17 or higher
- MySQL 8.0 or higher
- Maven 3.6+
- Git

### **Step 1: Clone the Repository**
```bash
git clone https://github.com/yourusername/Employee-TODO-Application.git
cd Employee-TODO-Application

### **Step 2: Backend Setup**
cd backend

# Update application.properties with your MySQL credentials
# Edit: spring.datasource.username and spring.datasource.password

# Run with Maven
mvn clean install
mvn spring-boot:run

# Backend runs on http://localhost:8000

### **Step 3: Frontend Setup**
cd frontend

# Install dependencies
npm install

# Start development server
npm start

# Frontend runs on http://localhost:5173

## 📸 Screenshots

| Feature | Preview |
|-------|--------|
| Home Page | ![Home](screenshots/webhomepage.png) |
| Edit Employee | ![Edit](screenshots/editmodel.png) |
| Delete Confirmation | ![Delete](screenshots/deleteconfrimmodel.png) |
| Mobile Page | ![Mobile](screenshots/mobilehomepage.png) |
