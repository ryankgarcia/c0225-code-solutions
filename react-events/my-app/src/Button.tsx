type Props = {
  label: string;
  onNext: () => void;
};
export function Button({ label, onNext }: Props) {
  return <button onClick={onNext}>{label}</button>;
}
