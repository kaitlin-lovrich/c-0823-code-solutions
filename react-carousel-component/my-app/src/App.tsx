import { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import './App.css';

type Image = {
  id: number;
  photoUrl: string;
};

const images = [
  {
    id: 1,
    photoUrl: '/images/004.png',
  },
  {
    id: 2,
    photoUrl: '/images/007.png',
  },
  {
    id: 3,
    photoUrl: '/images/025.png',
  },
  {
    id: 4,
    photoUrl: '/images/039.png',
  },
];

function App() {
  const [index, setIndex] = useState(0);
  const [activeCircle, setActiveCircle] = useState(false);

  function handleLeftClick() {
    index && setIndex(index - 1);
  }

  function handleRightClick() {
    index < images.length && setIndex(index + 1);
  }

  return (
    <>
      <div className="row">
        <LeftArrow onLeftClick={() => handleLeftClick} />
        <ShowImage image={images[index]} />
        <RightArrow onRightClick={() => handleRightClick} />
      </div>
      <div className="row">
        <CircleIndicators
          currentImage={images[index]}
          activeCircle={activeCircle}
          setActiveCircle={setActiveCircle}
        />
      </div>
    </>
  );
}

export default App;

type ShowImageProps = {
  image: Image;
};

function ShowImage({ image }: ShowImageProps) {
  return (
    <div className="img-div">
      <img src={image.photoUrl} />
    </div>
  );
}

type LeftArrowProps = {
  onLeftClick: () => void;
};

function LeftArrow({ onLeftClick }: LeftArrowProps) {
  return (
    <div id="left-arrow" onClick={onLeftClick}>
      <FaAngleLeft />
    </div>
  );
}

type RightArrowProps = {
  onRightClick: () => void;
};

function RightArrow({ onRightClick }: RightArrowProps) {
  return (
    <div id="right-arrow" onClick={onRightClick}>
      <FaAngleRight />
    </div>
  );
}

type CircleProps = {
  currentImage: Image;
  activeCircle: boolean;
  setActiveCircle: (activeCircle: boolean) => void;
};

function CircleIndicators({ activeCircle }: CircleProps) {
  return (
    <i
      className={
        activeCircle ? 'fa-solid fa-circle active' : 'fa-regular fa-circle'
      }></i>
  );
}
