# 📝 Task Management System API

A RESTful API built with Node.js and MongoDB to manage tasks.  
Supports full CRUD operations with fields like Title, Description, Status (Pending/Completed), and Due Date.

## 🔧 Setup

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd task-manager-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node app.js
   ```

Make sure MongoDB is running locally or configured using MongoDB Atlas.

## 📮 API Endpoints

| Method | Endpoint         | Description          |
|--------|------------------|----------------------|
| POST   | /api/tasks       | Create a task        |
| GET    | /api/tasks       | List all tasks       |
| GET    | /api/tasks/:id   | Get task by ID       |
| PUT    | /api/tasks/:id   | Update task by ID    |
| DELETE | /api/tasks/:id   | Delete task by ID    |

## 📦 Postman Collection

Exported as:  
`task-api.postman_collection.json`

Import it in Postman to test all endpoints easily.

## 📄 License

For academic use only.

## ✅ Track and Commit README

After saving this file:

```bash
git add README.md
git commit -m "Add README with API info"
git push
```
