import './CustomButton.css';

// export default function CustomButton({ text, color }) {
//   function handleCustomClick() {
//     window.alert(text);
//   }
//   return (
//     <button onClick={handleCustomClick} className={color}>
//       {text}
//     </button>
//   );
// }

export default function CustomButton({ text, color, onCustomClick }) {
  // function handleCustomClick() {
  //   onCustomClick(text)
  // }

  return (
    <button onClick={() => onCustomClick(text)} className={color}>
      {text}
    </button>
  );
}

// you can create a function ahead of time OR do an arrow function
