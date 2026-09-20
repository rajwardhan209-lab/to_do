import { useState } from "react";
import { useTodo } from "../contexts";

function TodoItem({ todo }) {
  const { deleteTodo, toggleComplete } = useTodo();

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.todo);

  const handleSave = () => {
    // Simple version: reload is not needed.
    // For editing functionality, we can add updateTodo later.
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <span
          className={todo.completed ? "completed" : ""}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.todo}
        </span>
      )}

      <div className="todo-buttons">
        <button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Save" : "Edit"}
        </button>

        <button onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;