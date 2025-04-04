import { useState } from 'react';
import './RotatingBanner.css';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  // to implement state in the design process, you must put the State variable (currentIndex) to where the state will be changing.
  // in this case, you will add it to the Banner, because that is what will be changing throughout the app
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <Banner item={items[currentIndex]} />
      <PrevButton
        onPrev={() =>
          setCurrentIndex((currentIndex - 1 + items.length) % items.length)
        }
      />
      <Indicators
        count={items.length}
        selected={currentIndex}
        onSelect={(index) => setCurrentIndex(index)}
      />
      <NextButton
        onNext={() => setCurrentIndex((currentIndex + 1) % items.length)}
      />
    </div>
  );
}

type BannerProps = {
  item: string;
};
// this Banner is the item being displayed(animal)
function Banner({ item }: BannerProps) {
  return <h1>{item}</h1>;
}

type PrevProps = {
  onPrev: () => void;
};
// this component controls the moving backward
function PrevButton({ onPrev }: PrevProps) {
  return <button onClick={onPrev}>Prev</button>;
}

type NextProps = {
  onNext: () => void;
};
// this component controls the moving forward
function NextButton({ onNext }: NextProps) {
  return <button onClick={onNext}>Next</button>;
}

type IndicatorsProps = {
  count: number;
  selected: number;
  onSelect: (index: number) => void;
};

function Indicators({ count, selected, onSelect }: IndicatorsProps) {
  // we passed count and did a for loop because there was no array to work with to use MAP method
  // we pushed a button element at index into our empty buttons array to then later pass it in to the div element
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => onSelect(i)}
        style={{
          backgroundColor: i === selected ? 'lightblue' : undefined,
        }}>
        {i}
      </button>
    );
  }
  return <div>{buttons}</div>;
}
