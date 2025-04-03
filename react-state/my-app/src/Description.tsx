import { useState } from 'react';
import './Description.css';

type Props = {
  texts: string[];
};
export function Description({ texts }: Props) {
  const [index, setIndex] = useState(0);
  return (
    <p
      className="description"
      onClick={() => setIndex((index + 1) % texts.length)}>
      {texts[index]}
    </p>
  );
}
