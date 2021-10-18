import Todo from "./Todos.js";
import react from "react";


function Todolist({ todos, toggleTodo }) {
  return (
   todos.map(todo => {
       return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
   })
  );
}

export default Todolist;
