/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import './App.css';
import HotButton from './HotButton';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function changeColor(count: number): any {
    let color;
    if (count < 3) {
      color = 'cold';
    } else if (count < 6) {
      color = 'cool';
    } else if (count < 9) {
      color = 'tepid';
    } else if (count < 12) {
      color = 'warm';
    } else if (count < 15) {
      color = 'hot';
    } else if (count < 18) {
      color = 'nuclear';
    } else {
      color = 'cold';
      setCount((count = 0));
    }
    return color;
  }

  return (
    <>
      <HotButton
        text="Hot Button"
        customClick={handleClick}
        color={changeColor(count)}
      />
    </>
  );
}

export default App;

// /* eslint-disable @typescript-eslint/no-explicit-any */
// import './App.css';
// import HotButton from './HotButton';
// import handleClick from './HotButton';
// import changeColor from './HotButton';

// function App() {
//   return (
//     <>
//       <HotButton
//         text="Hot Button"
//         customClick={handleClick()}
//         color={changeColor(count)}
//       />
//     </>
//   );
// }

// export default App;
