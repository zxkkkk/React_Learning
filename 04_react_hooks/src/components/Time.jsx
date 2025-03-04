import { useEffect, useState } from "react";

const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
  }, []);
  return (
    <div>
      <h2>当前时间是：{currentTime.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Time;
