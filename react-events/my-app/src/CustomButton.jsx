import './CustomButton.css';

export default function CustomButton({ text, color }) {
  function handleClick() {
    alert('Fancy Button clicked!');
  }
  return (
    <button onClick={handleClick} className={color}>
      {text}
    </button>
  );
}
