import { FaPlay, FaPause } from 'react-icons/fa';
import './Stopwatch.css';
import { useState } from 'react';

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();

  function handleStartStopClick() {
    setRunning(!running);
    if (running) {
      clearInterval(intervalId);
      setIntervalId(undefined);
    } else {
      setIntervalId(
        setInterval(() => {
          setTime((prev) => prev + 1);
        }, 500)
      );
    }
  }

  function handleResetClick() {
    if (!running) {
      setRunning(!running);
      setTime(0);
      clearInterval(intervalId);
      setIntervalId(undefined);
    }
  }

  return (
    <div>
      <Counter time={time} onClick={handleResetClick} />
      <StartStop running={running} onClick={handleStartStopClick} />
    </div>
  );
}

type CounterProps = {
  time: number;
  onClick: () => void;
};

function Counter({ time, onClick }: CounterProps) {
  return (
    <div className="timer-circle" onClick={onClick}>
      <p>{time}</p>
    </div>
  );
}

type StartStopProps = {
  running: boolean;
  onClick: () => void;
};

function StartStop({ running, onClick }: StartStopProps) {
  return (
    <div onClick={onClick} className="start-stop">
      {running ? <FaPause /> : <FaPlay />}
    </div>
  );
}

// need state for TIME and START/STOP (isRunning) V
// setTimeout for 1 second or interval
// set state of your counter +1 V
// click pause,
// need a state to clear an interval id
// if they click start, save the interval id
