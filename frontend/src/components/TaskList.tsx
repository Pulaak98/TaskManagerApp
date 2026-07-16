import type { Task } from "../types/task";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onToggle: (id: number, completed: boolean) => void;
  onEdit: (task: Task) => void;
}

export default function TaskList({
  tasks,
  onDelete,
  onToggle,
  onEdit,
}: TaskListProps) {
  if (!tasks.length) {
    return (
      <div className="text-center py-10 text-gray-500">No tasks found.</div>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
