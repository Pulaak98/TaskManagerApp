import { useEffect, useState, type FormEvent } from "react";

interface TaskFormProps {
  onSubmit: (title: string, description: string) => Promise<void>;
  initialTitle?: string;
  initialDescription?: string;
  isEditing?: boolean;
  onCancel?: () => void;
}

export default function TaskForm({
  onSubmit,
  initialTitle = "",
  initialDescription = "",
  isEditing = false,
  onCancel,
}: TaskFormProps) {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;

    await onSubmit(title, description);

    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    setTitle(initialTitle);
    setDescription(initialDescription);
  }, [initialTitle, initialDescription]);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold">
        {isEditing ? "Edit Task" : "Add New Task"}
      </h2>

      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={3}
        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
      >
        {isEditing ? "Save Changes" : "Add Task"}
      </button>
      {isEditing && (
        <button
          type="button"
          onClick={onCancel}
          className="w-full mt-2 bg-gray-200 hover:bg-gray-300 py-2 rounded-lg transition"
        >
          Cancel
        </button>
      )}
    </form>
  );
}
