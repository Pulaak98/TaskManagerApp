interface FilterButtonsProps {
  filter: string;
  onChange: (value: string) => void;
}

export default function FilterButtons({
  filter,
  onChange,
}: FilterButtonsProps) {
  const buttonClass = (value: string) =>
    `px-4 py-2 rounded-lg transition ${
      filter === value
        ? "bg-blue-600 text-white"
        : "bg-white border hover:bg-gray-100"
    }`;

  return (
    <div className="flex gap-3 flex-wrap">
      <button className={buttonClass("")} onClick={() => onChange("")}>
        All
      </button>

      <button
        className={buttonClass("false")}
        onClick={() => onChange("false")}
      >
        Pending
      </button>

      <button className={buttonClass("true")} onClick={() => onChange("true")}>
        Completed
      </button>
    </div>
  );
}
