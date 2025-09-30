import { useState } from "react";
import EditForm from "./EditForm";
import { formatElapsedTime } from "../utils/formattedTime";

function Todo({ todo, isSelected, deleteTodo, updateTodo, selectTodo }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleEdit = () => setIsEditing((prev) => !prev);
  const handleSelectTodo = () => selectTodo(todo.id);
  const handleDeleteTodo = () => deleteTodo(todo.id);

  return (
    <li onClick={handleSelectTodo} className={isSelected ? "active" : ""}>
      <div className="todo-content">
        <p>{todo.content}</p>
        <p>{formatElapsedTime({ elapsedTime: todo.time })}</p>
      </div>
      <div className="todo-btns">
        {isEditing && (
          <EditForm
            isEditing={isEditing}
            toggleEdit={handleToggleEdit}
            todo={todo}
            updateTodo={updateTodo}
          />
        )}
        {!isEditing && <button onClick={handleToggleEdit}>수정하기</button>}
        <button onClick={handleDeleteTodo}>삭제</button>
      </div>
    </li>
  );
}

export default Todo;
