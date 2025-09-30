import { useCallback, useEffect, useRef, useState } from "react";

const STOPWATCH_INTERVAL_MS = 1000;

function useStopWatch({ selectedTodo, onTick }) {
  const [time, setTime] = useState(0);
  const [isStopWatchStart, setIsStopWatchStart] = useState(false);
  const intervalIdRef = useRef(null);

  const startStopWatch = useCallback(() => {
    intervalIdRef.current = setInterval(() => setTime((prev) => prev + 1), STOPWATCH_INTERVAL_MS);
  }, []);

  const stopStopWatch = useCallback(() => {
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
  }, []);

  const toggleStopWatch = useCallback(() => {
    if (isStopWatchStart) stopStopWatch();
    else startStopWatch();
    setIsStopWatchStart((prev) => !prev);
  }, [isStopWatchStart, startStopWatch, stopStopWatch]);

  useEffect(() => {
    if (selectedTodo && time > 0) {
      onTick?.(selectedTodo);
    }
  }, [time, selectedTodo, onTick]);

  useEffect(() => {
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  return {
    time,
    isStopWatchStart,
    startStopWatch,
    stopStopWatch,
    toggleStopWatch,
  };
}

export default useStopWatch;
