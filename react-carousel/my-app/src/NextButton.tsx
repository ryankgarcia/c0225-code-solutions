import { FaChevronRight } from 'react-icons/fa';

type Props = {
  onCustomClick: () => void;
};

export function NextButton({ onCustomClick }: Props) {
  return (
    <FaChevronRight
      onClick={onCustomClick}
      className="next-image"
      size="2rem"
    />
  );
}
