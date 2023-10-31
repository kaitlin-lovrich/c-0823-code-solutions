import ShowListItem from './ShowListItem';
import PreviousButton from './PreviousButton';
import Banner from './Banner';
import NextButton from './NextButton';

type RotatingBannerProps = {
  items: Array<string>;
};

export default function RotatingBanner({ items }: RotatingBannerProps) {
  return (
    <>
      <ShowListItem items={items} />
      <PreviousButton />
      <Banner />
      <NextButton />
    </>
  );
}
