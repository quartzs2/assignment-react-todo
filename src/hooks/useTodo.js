import { useCallback, useState } from 'react';

function useTodo() {
  const [todo, setTodo] = useState([{ id: 1, content: 'hi', time: 0 }]);

  const addTodo = useCallback(
    (newTodo) => setTodo((prev) => [...prev, newTodo]),
    []
  );

  const deleteTodo = useCallback(
    (id) => setTodo((prev) => prev.filter((todo) => todo.id !== id)),
    []
  );

  const updateTodo = useCallback(
    (id, newTodo) =>
      setTodo((prev) =>
        prev.map((todo) => {
          if (todo.id === id) return newTodo;
          return todo;
        })
      ),
    []
  );

  return { todo, addTodo, deleteTodo, updateTodo };
}

export default useTodo;
