import { useEffect, useState } from "react";

import TodoList from "./components/TodoList";
import "./App.css";
import { Suspense, ErrorBoundary } from "@suspensive/react";
import { formattedTime } from "./utils/formattedTime";
import Advice from "./components/Advice";

const CLOCK_INTERVAL_MS = 1000;

function App() {
  const initialTime = formattedTime({ date: new Date() });
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(
      () => setTime(formattedTime({ date: new Date() })),
      CLOCK_INTERVAL_MS
    );

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <header>
        <h1>오늘의 할 일 📜</h1>
        <Suspense fallback={<p>Loading...</p>}>
          <ErrorBoundary fallback={({ error }) => <p>Error: {error.message}</p>}>
            <Advice />
          </ErrorBoundary>
        </Suspense>
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
