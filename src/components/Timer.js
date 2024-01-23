import React, { useState, useEffect } from 'react';

const Timer = (props) => {
  const { isRunning, resetTime } = props;
  const [seconds, setSeconds] = useState(resetTime);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  useEffect(() => {
    if (!isRunning && seconds !== resetTime) {
      const timeoutId = setTimeout(() => {
        setSeconds(resetTime);
      }, 0);

      return () => clearTimeout(timeoutId);
    }
  }, [isRunning, seconds, resetTime]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}m ${String(seconds).padStart(2, '0')}s`;
  };

  return (
    <div>
      <h1 className="timer">{formatTime(seconds)}</h1>
    </div>
  );
};

export default Timer;
