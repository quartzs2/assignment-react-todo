import { useEffect, useState } from 'react';
import useFetch from './hooks/useFetch';
import TodoList from './components/TodoList';
import formatTime from './utils/formatTime';
import './App.css';

function App() {
  const { data, isLoading, error } = useFetch(
    'https://korean-advice-open-api.vercel.app/api/advice'
  );
  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(() => {
    const intervalId = setInterval(() => setTime(formatTime(new Date())), 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <header>
        <h1>오늘의 할 일 📜</h1>
        {isLoading && <p>Loading...</p>}
        {error && <p>error.message</p>}
        {data && (
          <div className="advice">
            <p>{data.message}</p>
            <p>-{data.author}-</p>
          </div>
        )}
      </header>
      <main>
        <section className="clock">
          <div>{time}</div>
        </section>
        <section>
          <TodoList />
        </section>
      </main>
    </>
  );
}

export default App;
