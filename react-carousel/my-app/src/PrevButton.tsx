import { FaChevronLeft } from 'react-icons/fa';

type Props = {
  onCustomClick: () => void;
};

export function PrevButton({ onCustomClick }: Props) {
  return (
    <FaChevronLeft
      className="previous-image"
      size="2rem"
      onClick={onCustomClick}
    />
  );
}
