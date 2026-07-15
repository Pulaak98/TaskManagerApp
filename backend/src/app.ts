import express from "express";
import cors from "cors";
import taskRoutes from "./routes/task.routes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/tasks", taskRoutes);

// Health Check Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Task Manager API is running 🚀",
  });
});

export default app;
