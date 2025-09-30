import { useCallback, useRef, useState } from "react";
import useTodo from "../hooks/useTodo";
import StopWatch from "./StopWatch";
import Todo from "./Todo";
import useStopWatch from "../hooks/useStopWatch";

function TodoList() {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const { todo, addTodo, deleteTodo, updateTodo } = useTodo();
  const inputRef = useRef(null);

  const handleTodoTick = useCallback(
    (todoId) => {
      updateTodo(todoId, (currentTodo) => ({
        ...currentTodo,
        time: currentTodo.time + 1,
      }));
    },
    [updateTodo]
  );

  const { time, isStopWatchStart, toggleStopWatch } = useStopWatch({
    selectedTodo,
    onTick: handleTodoTick,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: String(Date.now()),
      content: inputRef.current.value,
      time: 0,
    });
    inputRef.current.value = "";
  };

  const selectTodo = (id) => setSelectedTodo(id);

  return (
    <>
      <StopWatch
        time={time}
        isStopWatchStart={isStopWatchStart}
        toggleStopWatch={toggleStopWatch}
      />
      <form onSubmit={handleSubmit} className="todo-form">
        <input type="text" ref={inputRef} />
        <button type="submit">추가하기</button>
      </form>
      <ul>
        {todo.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            isSelected={selectedTodo === item.id}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            selectTodo={selectTodo}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
