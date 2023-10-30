import { useState } from 'react';
import './HotButton.css';

type ButtonProps = {
  text: string;
};

export default function HotButton({ text }: ButtonProps) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function changeColor(count: number) {
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
      setCount(0);
    }
    return color;
  }

  return (
    <button onClick={() => handleClick()} className={changeColor(count)}>
      {text}
    </button>
  );
}

// Robert's Solulu:
// import { useState } from 'react';
// type Props = {
//   label: string;
// };
// export function HotButton({ label }: Props) {
//   const [clicks, setClicks] = useState(0);
//   const colors = ['purple', 'lavender', 'pink', 'orange', 'yellow', 'white'];
//   const color = colors[Math.floor(clicks / 3) % colors.length];
//   return (
//     <>
//       <button
//         onClick={() => setClicks(clicks + 1)}
//         style={{ backgroundColor: color }}>
//         {label}
//       </button>
//       <p>{clicks}</p>
//     </>
//   );
// }
// colors[Math.floor(clicks/3) % VideoColorSpace.length];
// above ^ whats left over (from the modulo operator) will never be bigger than the lentgth
