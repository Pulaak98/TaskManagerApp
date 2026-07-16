import prisma from "../config/prisma.js";
export const findAllTasks = async (search, completed) => {
    return prisma.task.findMany({
        where: {
            ...(search && {
                title: {
                    contains: search,
                    mode: "insensitive",
                },
            }),
            ...(completed !== undefined && {
                completed,
            }),
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};
export const createTask = async (title, description) => {
    return await prisma.task.create({
        data: {
            title,
            description: description || null,
        },
    });
};
export const updateTask = async (id, title, description) => {
    return prisma.task.update({
        where: {
            id,
        },
        data: {
            title,
            description: description ?? null,
        },
    });
};
export const deleteTask = async (id) => {
    return prisma.task.delete({
        where: {
            id,
        },
    });
};
export const updateTaskStatus = async (id, completed) => {
    return prisma.task.update({
        where: {
            id,
        },
        data: {
            completed,
        },
    });
};
