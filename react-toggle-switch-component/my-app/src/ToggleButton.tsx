import { useState } from 'react';
import './ToggleButton.css';

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  function handleSwitch() {
    setIsOn(!isOn);
  }

  return (
    <div className={isOn ? 'toggle-switch is-on' : 'toggle-switch'}>
      <div className="slider">
        <div onClick={() => handleSwitch()} className="switch"></div>
      </div>
      <p className="state-label">{isOn ? 'ON' : 'OFF'}</p>
    </div>
  );
}

// Robeerts solulu:
// export function ToggleSwitch() {
//   const [isOn, setIsOn] = useState(false);

//   const label = isOn ? 'On' : 'Off';
//   const classN = isOn ? 'On' : 'Off';
//   return (
//     <div className={classN}>
//       <div className="slider">
//         <div onClick={() => setIsOn(!isOn)} className="switch"></div>
//       </div>
//       <span className="state-label">{label}</span>
//     </div>
//   );
// }
