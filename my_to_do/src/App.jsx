import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { TodoProvider, useTodo } from "./contexts";
import "./App.css";

function TodoList() {
  const { todos } = useTodo();

  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
}

function App() {
  return (
    <TodoProvider>
      <div className="app">
        <h1>To-Do List</h1>

        {/* ONLY ONE TodoForm */}
        <TodoForm />

        {/* TodoItems are rendered here */}
        <div className="todo-list">
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;