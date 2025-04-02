type Props = {
  title: string;
};

export function Caption({ title }: Props) {
  return <h3>{title}</h3>;
}
