import { useState } from 'react';
import './Caption.css';

type Props = {
  captions: string[];
};
export function Caption({ captions }: Props) {
  const [index, setIndex] = useState(0);
  return (
    <h3
      className="thatsCap"
      onClick={() => setIndex((index + 1) % captions.length)}>
      {captions[index]}
    </h3>
  );
}
