import React from "react";


function Todos({ todo, toggleTodo }) {
function handleTodoClick(){
  toggleTodo(todo.id)
}

  return (
   <div>
     <label>
      <input type="checkbox" cheked={todo.complete} onChange={handleTodoClick} />
       {todo.name}
    </label>
   </div>
  );
}

export default Todos;
