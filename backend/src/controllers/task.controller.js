import { getAllTasksService } from "../services/task.service.js";
import { createTaskService } from "../services/task.service.js";
import { createTaskSchema } from "../validations/task.validation.js";
import { updateTaskService } from "../services/task.service.js";
import { updateTaskSchema } from "../validations/task.validation.js";
import { deleteTaskService } from "../services/task.service.js";
import { updateTaskStatusService } from "../services/task.service.js";
import { updateStatusSchema } from "../validations/task.validation.js";
import { taskIdSchema } from "../validations/task.validation.js";
import asyncHandler from "../utils/asyncHandler.js";
export const getAllTasks = asyncHandler(async (req, res) => {
    const search = req.query.search;
    const completed = req.query.completed !== undefined
        ? req.query.completed === "true"
        : undefined;
    const tasks = await getAllTasksService(search, completed);
    res.json({
        success: true,
        data: tasks,
    });
});
export const createTask = asyncHandler(async (req, res) => {
    const result = createTaskSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({
            success: false,
            errors: result.error.flatten().fieldErrors,
        });
    }
    const { title, description } = result.data;
    const task = await createTaskService(title, description);
    res.status(201).json({
        success: true,
        data: task,
    });
});
export const updateTask = asyncHandler(async (req, res) => {
    const { id } = taskIdSchema.parse(req.params);
    const result = updateTaskSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({
            success: false,
            errors: result.error.flatten().fieldErrors,
        });
    }
    const { title, description } = result.data;
    const task = await updateTaskService(id, title, description);
    res.json({
        success: true,
        data: task,
    });
});
export const deleteTask = asyncHandler(async (req, res) => {
    const { id } = taskIdSchema.parse(req.params);
    await deleteTaskService(id);
    res.status(200).json({
        success: true,
        message: "Task deleted successfully",
    });
});
export const updateTaskStatus = asyncHandler(async (req, res) => {
    const { id } = taskIdSchema.parse(req.params);
    const result = updateStatusSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({
            success: false,
            errors: result.error.flatten().fieldErrors,
        });
    }
    const { completed } = result.data;
    const task = await updateTaskStatusService(id, completed);
    res.json({
        success: true,
        data: task,
    });
});
//# sourceMappingURL=task.controller.js.map