import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import type { Task } from "./types/task";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";
import FilterButtons from "./components/FilterButtons";
import {
  createTask,
  getTasks,
  deleteTask,
  updateStatus,
  updateTask,
} from "./api/taskApi";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const loadTasks = async () => {
    const data = await getTasks(search, filter);
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, [search, filter]);

  const handleSubmit = async (title: string, description: string) => {
    if (editingTask) {
      await updateTask(editingTask.id, title, description);
      setEditingTask(null);
    } else {
      await createTask(title, description);
    }

    await loadTasks();
  };
  const handleDelete = async (id: number) => {
    await deleteTask(id);
    await loadTasks();
  };

  const handleToggle = async (id: number, completed: boolean) => {
    await updateStatus(id, completed);
    await loadTasks();
  };

  return (
    <div className="min-h-screen bg-slate-100 to-blue-100">
      <div className="max-w-4xl mx-auto p-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-blue-600">Task Manager</h1>

          <p className="text-gray-500 mt-2">
            Manage your daily tasks efficiently
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 mb-6 space-y-4">
          <SearchBar value={search} onChange={setSearch} />

          <FilterButtons filter={filter} onChange={setFilter} />
        </div>

        <TaskForm
          onSubmit={handleSubmit}
          initialTitle={editingTask?.title}
          initialDescription={editingTask?.description ?? ""}
          isEditing={!!editingTask}
          onCancel={() => setEditingTask(null)}
        />

        <div className="mt-8">
          <TaskList
            tasks={tasks}
            onDelete={handleDelete}
            onToggle={handleToggle}
            onEdit={setEditingTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
