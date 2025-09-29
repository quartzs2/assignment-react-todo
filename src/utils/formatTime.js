function formatTime(time) {
  if (time instanceof Date) {
    return time.toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
  }

  const t = Number(time);
  const hour = Math.floor(t / 3600);
  const minute = Math.floor((time % 3600) / 60);
  const second = Math.floor(t % 60);

  return [hour, minute, second]
    .map((item) => String(item).padStart(2, '0'))
    .join(':');
}

export default formatTime;
