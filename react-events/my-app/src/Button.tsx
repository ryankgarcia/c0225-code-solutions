type Props = {
  label: string;
  onNext: () => void;
};
export function Button({ label }: Props) {
  return <button>{label}</button>;
}
