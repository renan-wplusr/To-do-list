import { useState } from "react";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="my-4 space-y-4 p-6 bg-pink-100 rounded-md w-500 shadow flex flex-col w-96 custom-max-w">
      <input
        type="text"
        placeholder="digite o titulo da tarefa"
        className="border border-pink-300 outline-pink-400 px-2 py-2"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="digite a descrição da tarefa"
        className="border border-pink-300 outline-pink-400 px-2 py-2"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Erro! Digite 0 título da tarefa com sua descrição.");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="p-2 bg-pink-800 rounded"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
