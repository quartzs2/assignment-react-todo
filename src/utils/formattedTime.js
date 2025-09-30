export const formattedTime = ({ date }) => {
  return date?.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
};

export const formatElapsedTime = ({ elapsedTime }) => {
  const SECONDS_PER_HOUR = 3600;
  const SECONDS_PER_MINUTE = 60;

  const hour = Math.floor(elapsedTime / SECONDS_PER_HOUR);
  const minute = Math.floor((elapsedTime % SECONDS_PER_HOUR) / SECONDS_PER_MINUTE);
  const second = Math.floor(elapsedTime % SECONDS_PER_MINUTE);

  return [hour, minute, second].map((item) => String(item).padStart(2, "0")).join(":");
};
