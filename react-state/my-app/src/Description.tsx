import { useState } from 'react';

type Props = {
  texts: string[];
};
export function Description({ texts }: Props) {
  const [index, setIndex] = useState(0);
  return <p onClick={() => setIndex((index + 1) % texts.length)}>{texts}</p>;
}
