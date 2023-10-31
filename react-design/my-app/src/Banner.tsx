import './Banner.css';

type BannerProps = {
  isActive: boolean;
};

export default function Banner({ isActive }: BannerProps) {
  const numbers = [0, 1, 2, 3, 4, 5];
  const numberButton = numbers.map((number, index) => {
    return (
      <li key={index}>
        <div className="number-button">{number}</div>
      </li>
    );
  });
  return (
    <ul id="number-button" className={isActive ? 'active' : ''}>
      {numberButton}
    </ul>
  );
}
