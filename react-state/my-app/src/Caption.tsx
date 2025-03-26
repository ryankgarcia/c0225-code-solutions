import { useState } from 'react';

type Props = {
  captions: string[];
};
export function Caption({ captions }: Props) {
  const [index, setIndex] = useState(0);
  return (
    <h3 onClick={() => setIndex((index + 1) % captions.length)}>{captions}</h3>
  );
}
