import './Banner.css';

type BannerProps = {
  currentIndex: number;
  onSelect: (index: number) => void;
};

export default function Banner({ currentIndex, onSelect }: BannerProps) {
  const numbers = [0, 1, 2, 3, 4, 5];
  const numberButton = numbers.map((number, index) => {
    return (
      <li
        key={index}
        onClick={() => onSelect(index)}
        className={currentIndex === number ? 'active' : ''}>
        <div className="number-button">{number}</div>
      </li>
    );
  });
  return <ul id="number-button">{numberButton}</ul>;
}
