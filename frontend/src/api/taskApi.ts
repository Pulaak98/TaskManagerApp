import type { Task } from "../types/task";

const API_URL = `${import.meta.env.VITE_API_URL}/tasks`;

export async function getTasks(search = "", completed = ""): Promise<Task[]> {
  const params = new URLSearchParams();

  if (search.trim()) {
    params.append("search", search);
  }

  if (completed !== "") {
    params.append("completed", completed);
  }

  const res = await fetch(`${API_URL}?${params.toString()}`);

  if (!res.ok) {
    throw new Error("Failed to fetch tasks");
  }

  const data = await res.json();

  return data.data;
}

export async function createTask(title: string, description: string) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      description,
    }),
  });

  return res.json();
}

export async function updateTask(
  id: number,
  title: string,
  description: string,
) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      description,
    }),
  });

  return res.json();
}

export async function deleteTask(id: number) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  return res.json();
}

export async function updateStatus(id: number, completed: boolean) {
  const res = await fetch(`${API_URL}/${id}/status`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      completed,
    }),
  });

  return res.json();
}
