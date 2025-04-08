import { RotatingBanner } from './RotatingBanner';
import './App.css';

const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

export function App() {
  return (
    <div className="App">
      <RotatingBanner items={items} />
    </div>
  );
}
