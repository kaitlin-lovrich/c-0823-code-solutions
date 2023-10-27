/* eslint-disable @typescript-eslint/no-explicit-any */

import './HotButton.css';

type ButtonProps = {
  text: string;
  color: string;
  customClick: () => void;
};

export default function HotButton({ text, color, customClick }: ButtonProps) {
  return (
    <button onClick={() => customClick()} className={color}>
      {text}
    </button>
  );
}

// colors[Math.floor(clicks/3) % VideoColorSpace.length];
// above ^ whats left over (from the modulo operator) will never be bigger than the lentgth
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
