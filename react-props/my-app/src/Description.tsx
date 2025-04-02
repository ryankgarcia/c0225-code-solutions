type Props = {
  paragraph: string;
};

export function Description({ paragraph }: Props) {
  return <p>{paragraph}</p>;
}
