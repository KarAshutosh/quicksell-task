import React, { useState } from 'react';
import './App.css';
import Timer from './components/Timer';

const App = () => {
  const initialTime = 300;
  const [isRunning, setIsRunning] = useState(false);
  const [resetTime, setResetTime] = useState(initialTime);
  const [isResetting, setIsResetting] = useState(false); 

  const handleStart = () => {
    setIsRunning(true);
    setIsResetting(false); 
  };

  const handleStop = () => {
    setIsRunning(false);
    setIsResetting(false); 
  };

  const handleReset = () => {
    if (isRunning) {
      setIsRunning(false);
    }
    setResetTime(initialTime);
    setIsResetting(true); 
  };

  return (
    <div className="container">
      <Timer isRunning={isRunning} resetTime={resetTime} isResetting={isResetting} />
      <div className="buttons">
        <button className="start" onClick={handleStart}>Start</button>
        <button className="stop" onClick={handleStop}>Stop</button>
        <button className="reset" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default App;
