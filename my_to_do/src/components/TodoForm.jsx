import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todo.trim()) return;

    addTodo(todo);
    setTodo("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write To-Do"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;