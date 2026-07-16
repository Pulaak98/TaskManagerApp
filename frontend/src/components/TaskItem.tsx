import type { Task } from "../types/task";

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
  onToggle: (id: number, completed: boolean) => void;
  onEdit: (task: Task) => void;
}

export default function TaskItem({
  task,
  onDelete,
  onToggle,
  onEdit,
}: TaskItemProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 flex justify-between items-start">
      <div>
        <h3
          className={`text-lg font-semibold ${
            task.completed ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {task.title}
        </h3>

        {task.description && (
          <p className="text-gray-500 mt-2">{task.description}</p>
        )}
      </div>

      <div className="flex flex-col gap-2 items-end">
        <button
          onClick={() => onToggle(task.id, !task.completed)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition ${
            task.completed
              ? "bg-green-100 text-green-700 hover:bg-green-200"
              : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
          }`}
        >
          {task.completed ? "✓ Completed" : "○ Pending"}
        </button>
        <button
          onClick={() => onEdit(task)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
