import { formatElapsedTime } from "../utils/formattedTime";

function StopWatch({ time, isStopWatchStart, toggleStopWatch }) {
  return (
    <div className="stopWatch">
      <div>{formatElapsedTime({ elapsedTime: time })}</div>
      <button onClick={toggleStopWatch}>{isStopWatchStart ? "정지" : "시작"}</button>
    </div>
  );
}

export default StopWatch;
