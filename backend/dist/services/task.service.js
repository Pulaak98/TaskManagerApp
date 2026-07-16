import { findAllTasks } from "../repositories/task.repository.js";
import { createTask } from "../repositories/task.repository.js";
import { updateTask } from "../repositories/task.repository.js";
import { deleteTask } from "../repositories/task.repository.js";
import { updateTaskStatus } from "../repositories/task.repository.js";
export const getAllTasksService = async (search, completed) => {
    return findAllTasks(search, completed);
};
export const createTaskService = async (title, description) => {
    return await createTask(title, description);
};
export const updateTaskService = async (id, title, description) => {
    return updateTask(id, title, description);
};
export const deleteTaskService = async (id) => {
    return deleteTask(id);
};
export const updateTaskStatusService = async (id, completed) => {
    return updateTaskStatus(id, completed);
};
