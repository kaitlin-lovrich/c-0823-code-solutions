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
