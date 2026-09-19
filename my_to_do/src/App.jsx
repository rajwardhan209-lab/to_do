import { useState,useEffect } from "react";

import "./App.css";
import { Todoprovide } from "./contexts";

export default function App() {
  const [todos, settodos] = useState([]);
  const addTodo=(todo)=>{
    settodos((prev)=>[...prev,{id:Date.now(),...todo}])
  }
  const updatedTodo = (id,todo) =>{
    settodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)))
  }

  const deleteTodo =(id)=>{
    settodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }
  const toggle_complete = (id) =>{
    settodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,comleted:!prevTodo.comleted}:prevTodo))
  }
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      settodos(todos)
      
    }
  },[])
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])
  return (
    <Todoprovide value={{todos,addTodo,updatedTodo,deletedTodo,toggleComplete}}>
      <div className="min-h-screen bg-slate-950 text-white px-6 py-14">
        <main className="mx-auto max-w-4xl">
          {/* Title */}
          <h1 className="text-5xl font-bold tracking-tight">To-Do List</h1>

          {/* Empty Workspace */}
         
        </main>
      </div>
    </Todoprovide>
  );
}
