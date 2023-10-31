import './Banner.css';

export default function Banner() {
  const numbers = [0, 1, 2, 3, 4, 5];
  const numberButton = numbers.map((number, index) => {
    return (
      <li key={numbers[index]}>
        <div className="number-button">{number}</div>
      </li>
    );
  });
  return <ul id="number-button">{numberButton}</ul>;
}
