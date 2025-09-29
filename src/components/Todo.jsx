import { useState } from 'react';
import EditForm from './EditForm';
import formatTime from '../utils/formatTime';

function Todo({ todo, isSelected, deleteTodo, updateTodo, selectTodo }) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((prev) => !prev);

  return (
    <li
      onClick={() => selectTodo(todo.id)}
      className={isSelected ? 'active' : ''}
    >
      <div className="todo-content">
        <p>{todo.content}</p>
        <p>{formatTime(todo.time)}</p>
      </div>
      <div className="todo-btns">
        {isEditing && (
          <EditForm
            isEditing={isEditing}
            toggleEdit={toggleEdit}
            todo={todo}
            updateTodo={updateTodo}
          />
        )}
        {!isEditing && <button onClick={toggleEdit}>수정하기</button>}
        <button onClick={() => deleteTodo(todo.id)}>삭제</button>
      </div>
    </li>
  );
}

export default Todo;
