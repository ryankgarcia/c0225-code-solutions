import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const imageArray = [
  '/starry-sky.jpeg',
  '/cool-car.jpg',
  '/cool-kitty.jpg',
  '/disco-lines.jpg',
  '/nissan-gtr.jpg',
];
const captionsArray = [
  'A Beautiful Image of Space',
  'Cool Car',
  'Cool Kitty',
  'Disco Lines',
  'Nissan GTR',
];
const descriptionsArray = [
  'This is a photo of a nebula in space',
  'A vibrantly colored car is displayed above',
  'A kitty cat with some stunna shades. Whoop whoop!',
  'Disco Lines is a popular EDM artist from Colorado',
  'Nissan GTR is one of Nissans most popular car models in its sports car category',
];

export default function App() {
  return (
    <>
      <Header text="React Image Bank" />
      <Image srcs={imageArray} />
      <Caption captions={captionsArray} />
      <Description texts={descriptionsArray} />
      <Button label="Click for Next Image" />
    </>
  );
}
