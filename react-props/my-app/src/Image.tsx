import './Image.css';

type Props = {
  imageClass: string;
  src: string;
  alt: string;
};

export function Image({ imageClass, src, alt }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className={imageClass} src={src} alt={alt} />
      </div>
    </div>
  );
}
