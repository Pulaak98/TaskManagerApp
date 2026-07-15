import prisma from "../config/prisma.js";

export const findAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createTask = async (
  title: string,
  description?: string
) => {
  return await prisma.task.create({
    data: {
      title,
      description: description || null,
    },
  });
};

export const updateTask = async (
  id: number,
  title: string,
  description?: string
) => {
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

export const deleteTask = async (id: number) => {
  return prisma.task.delete({
    where: {
      id,
    },
  });
};

export const updateTaskStatus = async (
  id: number,
  completed: boolean
) => {
  return prisma.task.update({
    where: {
      id,
    },
    data: {
      completed,
    },
  });
};