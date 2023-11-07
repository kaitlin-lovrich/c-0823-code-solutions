/* eslint-disable @typescript-eslint/no-explicit-any */
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
  const [activeCircle, setActiveCircle] = useState(index);

  function handleLeftClick() {
    index > 0 ? setIndex(index - 1) : setIndex(images.length - 1);
  }

  function handleRightClick() {
    index < images.length - 1 ? setIndex(index + 1) : setIndex(0);
  }

  function handleCircleClick(circleIndex: any) {
    console.log('click', circleIndex.target);
    console.log(circleIndex);
    setActiveCircle(circleIndex);
  }

  return (
    <>
      <div className="row">
        <LeftArrow onLeftClick={handleLeftClick} />
        <ShowImage image={images[index]} />
        <RightArrow onRightClick={handleRightClick} />
      </div>
      <div className="row">
        <CircleIndicators
          currentImage={images[index]}
          index={index}
          // setActiveCircle={index}
          onCircleClick={(circleIndex) => handleCircleClick(circleIndex)}
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
  index: number;
  setActiveCircle: (index: number) => void;
  onCircleClick: (circleIndex: any) => void;
};

function CircleIndicators({
  index,

  onCircleClick,
}: CircleProps) {
  const circles = [...Array(images.length)].map((_circle, circleIndex) => {
    const circle =
      circleIndex === index
        ? 'fa-solid fa-circle active'
        : 'fa-regular fa-circle';
    // if (circleIndex === index) setActiveCircle(circleIndex);
    return (
      <i
        className={circle}
        key={circleIndex}
        onClick={(circleIndex) => onCircleClick(circleIndex)}></i>
    );
  });
  return <div>{circles}</div>;
}
