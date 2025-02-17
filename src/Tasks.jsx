import { ChevronRightIcon, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onClickTask, OnDeleteTask }) {
  const navigate = useNavigate();
  function checkDescription(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-pink-100 rounded-md w-500 shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-1">
          <button
            onClick={() => onClickTask(task.id)}
            className={`bg-pink-300 w-full text-black rounded p-2 hover:bg-purple-400 ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button
            onClick={() => checkDescription(task)}
            className="bg-pink-300 text-black rounded p-2 hover:bg-purple-400 "
          >
            <ChevronRightIcon />
          </button>
          <button
            className="bg-pink-500 text-white rounded p-2 hover:bg-purple-400"
            onClick={() => OnDeleteTask(task.id)}
          >
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
