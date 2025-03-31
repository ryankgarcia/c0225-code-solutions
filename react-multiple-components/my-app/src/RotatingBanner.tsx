import './RotatingBanner.css';

// const items = [
//   'Aardvark',
//   'Bengal',
//   'Caterpillar',
//   'Dromedary',
//   'Elephant',
//   'Ferret',
// ];

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  return (
    <div>
      <h2 className="textDisplay">{items}</h2>
      <button className="prevNextButtons">Prev</button>
      <button className="numbers">0</button>
      <button className="numbers">1</button>
      <button className="numbers">2</button>
      <button className="numbers">3</button>
      <button className="numbers">4</button>
      <button className="numbers">5</button>
      <button className="prevNextButtons">Next</button>
    </div>
  );
}
