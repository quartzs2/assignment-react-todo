import { useEffect, useState } from "react";

const ESCAPE_KEY = "escape";

function EditForm({ isEditing, toggleEdit, todo, updateTodo }) {
  const [text, setText] = useState(todo.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo(todo.id, { ...todo, content: text });
    toggleEdit();
  };

  useEffect(() => {
    const handler = (e) => {
      if (isEditing && e.key.toLowerCase() === ESCAPE_KEY) {
        toggleEdit();
      }
    };
    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, [isEditing, toggleEdit]);

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">저장하기</button>
    </form>
  );
}

export default EditForm;
