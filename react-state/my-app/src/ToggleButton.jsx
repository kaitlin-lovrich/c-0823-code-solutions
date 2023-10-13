import './ToggleButton.css';
import { useState } from 'react';

export default function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('useState:', isClicked);

  function handleClick() {
    console.log('before setter:', isClicked);
    setIsClicked(!isClicked);
    console.log('after setter:', isClicked);
  }

  return (
    <button onClick={handleClick} style={{ backgroundColor: color }}>
      {isClicked ? text : 'false'}
    </button>
  );
}
