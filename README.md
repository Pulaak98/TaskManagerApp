# 📋 Task Manager

A full-stack Task Manager application built with React, Express, PostgreSQL, Prisma ORM, and Docker.

## 🚀 Features

- Create, Read, Update and Delete Tasks (CRUD)
- Mark tasks as Complete / Incomplete
- Search tasks by title
- Filter tasks by completion status
- Input validation using Zod
- Global Error Handling
- RESTful API
- PostgreSQL database with Prisma ORM
- Dockerized frontend, backend, and database

---

## 🛠 Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- Fetch API
- Vite

### Backend
- Node.js
- Express.js
- TypeScript
- Prisma ORM
- Zod

### Database
- PostgreSQL

### DevOps
- Docker
- Docker Compose

---

## 📁 Project Structure

```
TaskManagerApp
│
├── frontend
│   ├── src
│   ├── Dockerfile
│   └── .env
│
├── backend
│   ├── prisma
│   ├── src
│   ├── Dockerfile
│   ├── start.sh
│   └── .env
│
├── docker-compose.yml
└── README.md
```

---

## ⚙️ Environment Variables

### Backend (.env)

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/task_manager"
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000
```

---

## ▶️ Run Locally

### Backend

```bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🐳 Run with Docker

Build and start all services:

```bash
docker compose up --build
```

The application will be available at:

Frontend:

```
http://localhost:5173
```

Backend:

```
http://localhost:5000
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /tasks | Get all tasks |
| GET | /tasks?search=react | Search tasks |
| GET | /tasks?completed=true | Completed tasks |
| GET | /tasks?completed=false | Pending tasks |
| POST | /tasks | Create task |
| PUT | /tasks/:id | Update task |
| PATCH | /tasks/:id/status | Toggle status |
| DELETE | /tasks/:id | Delete task |

---

## ✅ Sample Request

```json
POST /tasks

{
  "title": "Learn Docker",
  "description": "Containerize the application"
}
```

---

## 📚 What I Learned

- Building REST APIs using Express and TypeScript
- Repository-Service-Controller architecture
- Database integration with Prisma ORM
- PostgreSQL CRUD operations
- Request validation using Zod
- Global error handling
- React state management with Fetch API
- Dockerizing frontend, backend, and PostgreSQL
- Running a full-stack application using Docker Compose

---

## 🔮 Future Improvements

- User Authentication (JWT)
- Pagination
- Sorting
- Unit & Integration Testing
- Deployment (Render/Vercel/Railway)
- CI/CD using GitHub Actions

---

## 👨‍💻 Author

**Mehedi Kaisar Pulak**