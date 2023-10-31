import './NextButton.css';

type NextButtonProp = {
  onClick: () => void;
};

export default function NextButton({ onClick }: NextButtonProp) {
  return (
    <div id="next-button" onClick={onClick}>
      <span>Next</span>
    </div>
  );
}
