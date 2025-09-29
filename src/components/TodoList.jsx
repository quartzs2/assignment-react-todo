import { useEffect, useRef, useState } from 'react';
import useTodo from '../hooks/useTodo';
import StopWatch from './StopWatch';
import Todo from './Todo';
import useStopWatch from '../hooks/useStopWatch';

function TodoList() {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const { todo, addTodo, deleteTodo, updateTodo } = useTodo();
  const { time, isStopWatchStart, toggleStopWatch } =
    useStopWatch(selectedTodo);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: String(Date.now()),
      content: inputRef.current.value,
      time: 0,
    });
    setTimeout(() => (inputRef.current.value = ''), 0);
  };
  const selectTodo = (id) => setSelectedTodo(id);

  useEffect(() => {
    if (selectedTodo) {
      const prev = todo.find((item) => item.id === selectedTodo);
      updateTodo(selectedTodo, { ...prev, time: prev.time + 1 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  return (
    <>
      <StopWatch
        time={time}
        isStopWatchStart={isStopWatchStart}
        toggleStopWatch={toggleStopWatch}
        todo={todo}
      />
      <form onSubmit={handleSubmit} className="todo-form">
        <input type="text" ref={inputRef} />
        <button type="submit">추가하기</button>
      </form>
      <ul>
        {todo.map((item) => (
          <Todo
            key={item.id}
            time={time}
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
