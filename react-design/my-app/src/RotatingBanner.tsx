import ShowListItem from './ShowListItem';
import PreviousButton from './PreviousButton';
import Banner from './Banner';
import NextButton from './NextButton';
import { useState } from 'react';

type RotatingBannerProps = {
  items: Array<string>;
};

export default function RotatingBanner({ items }: RotatingBannerProps) {
  const [index, setIndex] = useState(0);

  function handlePrevClick() {
    index && setIndex(index - 1);
  }

  function handleNextClick() {
    index < 5 && setIndex(index + 1);
  }

  function handleSelect(index: number) {
    setIndex(index);
  }

  return (
    <>
      <ShowListItem items={items} index={index} />
      <PreviousButton onClick={handlePrevClick} />
      <Banner currentIndex={index} onSelect={handleSelect} />
      <NextButton onClick={handleNextClick} />
    </>
  );
}

// Robert's Solulu:
// import { CSSProperties, useState } from 'react';
// type Props = {
//   items: string[];
// };
// export function RotatingBanner({ items }: Props) {
//   const [current, setCurrent] = useState(4);
//   function handlePrevClick() {
//     setCurrent((current - 1 + items.length) % items.length);
//   }
//   function handleNextClick() {
//     setCurrent((current + 1) % items.length);
//   }
//   function handleSelect(index: number) {
//     setCurrent(index);
//   }
//   return (
//     <>
//       <Banner item={items[current]} />
//       <Button text="Prev" onClick={handlePrevClick} />
//       <Indicators items={items} current={current} onSelect={handleSelect} />
//       <Button text="Next" onClick={handleNextClick} />
//     </>
//   );
// }
// type BannerProps = {
//   item: string;
// };
// function Banner({ item }: BannerProps) {
//   return <h1>{item}</h1>;
// }
// type ButtonProps = {
//   text: string;
//   style?: CSSProperties;
//   onClick: () => void;
// };
// function Button({ text, style, onClick }: ButtonProps) {
//   return (
//     <button style={style} onClick={onClick}>
//       {text}
//     </button>
//   );
// }
// type IndicatorsProps = {
//   items: Props['items'];
//   current: number;
//   onSelect: (index: number) => void;
// };
// function Indicators({ items, current, onSelect }: IndicatorsProps) {
//   const buttons = items.map((item, index) => (
//     <Button
//       key={index + item}
//       text={String(index)}
//       style={{ backgroundColor: current === index ? 'lightblue' : 'white' }}
//       onClick={() => onSelect(index)}
//     />
//   ));
//   return <div>{buttons}</div>;
// }
