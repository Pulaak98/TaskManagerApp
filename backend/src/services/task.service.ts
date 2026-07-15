import { findAllTasks } from "../repositories/task.repository.js";
import { createTask } from "../repositories/task.repository.js";
import { updateTask } from "../repositories/task.repository.js";
import { deleteTask } from "../repositories/task.repository.js";
import { updateTaskStatus } from "../repositories/task.repository.js";

export const getAllTasksService = async () => {
  return await findAllTasks();
};

export const createTaskService = async (
  title: string,
  description?: string
) => {
  return await createTask(title, description);
};

export const updateTaskService = async (
  id: number,
  title: string,
  description?: string
) => {
  return updateTask(id, title, description);
};

export const deleteTaskService = async (id: number) => {
  return deleteTask(id);
};

export const updateTaskStatusService = async (
  id: number,
  completed: boolean
) => {
  return updateTaskStatus(id, completed);
};