import React, { useState } from 'react';
import './App.css';
import Timer from './components/Timer';

const App = () => {
  const initialTime = 300;
  const [isRunning, setIsRunning] = useState(false);
  const [resetTime, setResetTime] = useState(initialTime);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    if (isRunning) {
      setIsRunning(false);
    }
    setResetTime(initialTime);
  };

  return (
    <div className="container">
      <Timer isRunning={isRunning} resetTime={resetTime} />
      <div className="buttons">
        <button className="start" onClick={handleStart}>Start</button>
        <button className="stop" onClick={handleStop}>Stop</button>
        <button className="reset" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default App;