import './PreviousButton.css';

type prevButtonProps = {
  onClick: () => void;
};

export default function PreviousButton({ onClick }: prevButtonProps) {
  return (
    <div id="prev-button" onClick={onClick}>
      <span>Prev</span>
    </div>
  );
}
