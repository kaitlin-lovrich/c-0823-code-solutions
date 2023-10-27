type ButtonProps = {
  text: string;
  customClick: () => void;
};

export default function CustomButton({ text, customClick }: ButtonProps) {
  return <button onClick={() => customClick()}>{text}</button>;
}

// My personal notes:
// on line 3 `onCustomClick` is saying its a function, that takes no arguements, and returns a void aka nothing`
// on line 7 When the button gets clicked, it calls the function that was passed to on click

// Robert's long breakdown of the solution:
// import { CSSProperties, useState } from 'react';
// export default function Counter() {
//   const [count, setCount] = useState(4);
//   return (
//     <div style={counterStyle}>
//       <Button text="Down" onTap={() => setCount(count - 1)} />
//       <Label value={count} />
//       <Button text="Up" onTap={() => setCount(count + 1)} />
//     </div>
//   );
// }
// type ButtonProps = {
//   text: string;
//   onTap: () => void;
// };
// function Button({ text, onTap }: ButtonProps) {
//   return <button onClick={onTap}>{text}</button>;
// }
// type LabelProps = {
//   value: number;
// };
// function Label({ value }: LabelProps) {
//   return <span>{value}</span>;
// }
// const counterStyle: CSSProperties = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   height: '100vh',
//   gap: '1rem',
// };
//  he then calls <Counter /> in his app function
