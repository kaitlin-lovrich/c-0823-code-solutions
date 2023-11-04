import { FaPlay, FaPause } from 'react-icons/fa';
import './Stopwatch.css';
import { useState } from 'react';

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();

  function handleStartStopClick() {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(undefined);
    } else {
      setIntervalId(
        setInterval(() => {
          setTime((prev) => prev + 1);
        }, 1000)
      );
    }
  }

  function handleResetClick() {
    if (intervalId === undefined) {
      setTime(0);
    }
  }

  return (
    <div>
      <Counter time={time} onClick={handleResetClick} />
      <StartStop
        isRunning={intervalId !== undefined}
        onClick={handleStartStopClick}
      />
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
  isRunning: boolean;
  onClick: () => void;
};

function StartStop({ isRunning, onClick }: StartStopProps) {
  return (
    <div onClick={onClick} className="start-stop">
      {isRunning ? <FaPause /> : <FaPlay />}
    </div>
  );
}

// My notes before getting started:
// need state for TIME and START/STOP (isRunning) V
// setTimeout for 1 second or interval
// set state of your counter +1 V
// click pause,
// need a state to clear an interval id
// if they click start, save the interval id

// Robert's Solulu:
// import { useState } from 'react';
// import { FaPause, FaPlay } from 'react-icons/fa';
// import './StopWatch.css';

// export function StopWatch() {
//   const [elapsedTime, setElapsedTime] = useState(7);
//   const [intervalId, setIntervalId] = useState<NodeJS.Timer>();

//   function handlePlayClick() {
//     if (intervalId === undefined) {
//       const id = setInterval(() => setElapsedTime((prev) => prev + 1), 1000);
//       setIntervalId(id);
//     } else {
//       clearInterval(intervalId);
//       setIntervalId(undefined);
//     }
//   }

//   const cursor = intervalId === undefined ? 'pointer' : 'default';

//   return (
//     <div className="stopwatch">
//       <div
//         className="watch-face"
//         style={{ cursor }}
//         onClick={() => intervalId === undefined && setElapsedTime(0)}>
//         <ElapsedTime time={elapsedTime} />
//       </div>
//       <PlayButton
//         isRunning={intervalId !== undefined}
//         onClick={handlePlayClick}
//       />
//     </div>
//   );
// }

// type TimeProps = {
//   time: number;
// };

// function ElapsedTime({ time }: TimeProps) {
//   return <div>{time}</div>;
// }

// type ButtonProps = {
//   isRunning: boolean;
//   onClick: () => void;
// };

// function PlayButton({ isRunning, onClick }: ButtonProps) {
//   return (
//     <div onClick={onClick} className="start-stop">
//       {isRunning ? <FaPause /> : <FaPlay />}
//     </div>
//   );
// }
