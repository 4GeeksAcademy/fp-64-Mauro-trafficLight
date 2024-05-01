import React, { useState } from 'react';
import TrafficController from './TrafficController';

const SignalLight = () => {
  const [currentColor, setCurrentColor] = useState('red');
  const [isRunning, setIsRunning] = useState(false);

  const handleColorChange = (newColor) => {
    setCurrentColor(newColor);
  };

  const handleTurnOff = () => {
    setIsRunning(false);
    setCurrentColor('red');
  };

  const pauseLight = () => {
    setIsRunning(false);
  };

  return (
    <main>
      <div className="p-box"></div>
      <div className="box-light">
        <div
          className={`red-light ${currentColor === 'red' ? 'light-on' : ''}`}
          onClick={pauseLight}
        ></div>
        <div
          className={`yellow-light ${
            currentColor === 'yellow' ? 'light-on' : ''
          }`}
          onClick={pauseLight}
        ></div>
        <div
          className={`green-light ${
            currentColor === 'green' ? 'light-on' : ''
          }`}
          onClick={pauseLight}
        ></div>
      </div>
      <button
        onClick={() => setIsRunning(!isRunning)}
        className="btn btn-success"
      >
        {isRunning ? 'pause' : 'play'}
      </button>
      <button onClick={handleTurnOff} className="btn btn-danger">
        Turn Off
      </button>
      <TrafficController onChange={handleColorChange} />
    </main>
  );
};

export default SignalLight;
