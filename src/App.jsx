import { useEffect, useState } from "react";
import AddTasks from "./AddTasks";
import Tasks from "./Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onAddTaskSubmit(title, description) {
    const nTasks = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, nTasks]);
  }

  function onClickTask(TaskId) {
    const nTasks = tasks.map((task) => {
      if (task.id == TaskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(nTasks);
  }

  function OnDeleteTask(TaskId) {
    const nTasks = tasks.filter((tasks) => TaskId !== tasks.id);
    setTasks(nTasks);
  }

 return (
    <div className="w-full min-h-screen h-screen bg-black justify-center flex flex-col">
      <div className="w-[100%] h-screen flex flex-col items-center justify-center flex-grow">
        <h1 className="text-pink-200 text-6xl font-bold whitespace-nowrap custom-h1">
          Tarefas a fazer!
        </h1>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />

        <Tasks
          tasks={tasks}
          onClickTask={onClickTask}
          OnDeleteTask={OnDeleteTask}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
