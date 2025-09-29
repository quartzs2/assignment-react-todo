import { useEffect, useRef, useState } from 'react';

function useStopWatch() {
  const [time, setTime] = useState(0);
  const [isStopWatchStart, setIsStopWatchStart] = useState(false);
  const intervalIdRef = useRef(null);

  const startStopWatch = () => {
    intervalIdRef.current = setInterval(
      () => setTime((prev) => prev + 1),
      1000
    );
  };
  const stopStopWatch = () => {
    setTime(0);
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
  };
  const toggleStopWatch = () => {
    if (isStopWatchStart) stopStopWatch();
    else startStopWatch();
    setIsStopWatchStart((prev) => !prev);
  };

  useEffect(() => {
    if (intervalIdRef.current) {
      stopStopWatch();
    }
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
