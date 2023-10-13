import './CustomButton.css';

// export default function CustomButton({ text, color }) {
//   function handleClick() {
//     window.alert(text);
//   }
//   return (
//     <button onClick={handleClick} className={color}>
//       {text}
//     </button>
//   );
// }

export default function CustomButton({ text, color, onCustomClick }) {
  return (
    <button onClick={onCustomClick} className={color}>
      {text}
    </button>
  );
}
