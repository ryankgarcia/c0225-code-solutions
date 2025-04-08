import { useEffect, useState } from 'react';
import { CarouselImage } from './CarouselImage';
import { Dot } from './Dot';
import { PrevButton } from './PrevButton';
import { NextButton } from './NextButton';

export type Image = {
  src: string;
  alt: string;
};

type Props = {
  images: Image[];
};

export function Carousel({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images, currentIndex]);

  function handleNext() {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }

  function handlePrev() {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function handleCurrentIndex(i: number) {
    setCurrentIndex(i);
  }
  return (
    <div className="carousel">
      <PrevButton onCustomClick={handlePrev} />
      <CarouselImage currentImage={images[currentIndex]} />
      <NextButton onCustomClick={handleNext} />
      <Dot
        currentIndex={currentIndex}
        numDots={images.length}
        onCustomClick={handleCurrentIndex}
      />
    </div>
  );
}
