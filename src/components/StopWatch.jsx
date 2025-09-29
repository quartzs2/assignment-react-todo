import formatTime from '../utils/formatTime';

function StopWatch({ time, isStopWatchStart, toggleStopWatch }) {
  return (
    <div className="stopWatch">
      <div>{formatTime(time)}</div>
      <button onClick={toggleStopWatch}>
        {isStopWatchStart ? '정지' : '시작'}
      </button>
    </div>
  );
}

export default StopWatch;
