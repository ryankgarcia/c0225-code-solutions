import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const paragraph =
  ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam incidunt sit dolorum accusantium sapiente reiciendis maxime dolores ullam delectus, commodi placeat eveniet, quam voluptates facere et magnam architecto quaerat velit voluptas rerum quos asperiores quis in! Nemo aut aliquam quas dolore quaerat, error numquam odio modi eos vero. Modi nisi eos autem? Iusto hic impedit aspernatur labore quos nesciunt? Ad dolore pariatur aperiam nemo, maiores laboriosam quam quod nisi ipsum, dicta sunt laborum similique repellat? ';
const src = '/starry-sky.jpeg';
const alt = 'space-image';
const imageClass = 'image-fill';
const topElement = 'React Image Bank';
const title = 'A beautiful Image of Space';
const text = 'Click For Next Image';

export default function App() {
  return (
    <>
      <Header topElement={topElement} />
      <Image imageClass={imageClass} src={src} alt={alt} />
      <Caption title={title} />
      <Description paragraph={paragraph} />
      <Button text={text} />
    </>
  );
}
