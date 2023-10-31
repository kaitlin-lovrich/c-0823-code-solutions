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
  const [isActive, setIsActive] = useState(false);
  console.log(setIndex, setIsActive); // temp to get rid of no unused var error
  return (
    <>
      <ShowListItem items={items} index={index} />
      <PreviousButton />
      <Banner isActive={isActive} />
      <NextButton />
    </>
  );
}
