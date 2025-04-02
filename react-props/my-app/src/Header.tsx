type Props = {
  topElement: string;
};

export function Header({ topElement }: Props) {
  return <h1>{topElement}</h1>;
}
