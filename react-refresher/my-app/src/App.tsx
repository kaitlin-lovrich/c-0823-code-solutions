import { useState } from 'react';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  const [count, setCount] = useState(0);

  function handleUpClick() {
    setCount(count + 1);
  }

  function handleDownClick() {
    setCount(count - 1);
  }

  return (
    <>
      <CustomButton text="Down" customClick={handleDownClick} />
      {count}
      <CustomButton text="Up" customClick={handleUpClick} />
    </>
  );
}

export default App;
