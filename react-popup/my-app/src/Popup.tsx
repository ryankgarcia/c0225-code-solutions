import './Popup.css';

type Props = {
  isPopupOpen: boolean;
  setIsPopupOpen: (open: boolean) => void;
};

export function Popup({ isPopupOpen, setIsPopupOpen }: Props) {
  if (!isPopupOpen) return null;
  return (
    <div>
      <ul
        style={{ listStyleType: 'none' }}
        className="shaded-border"
        onClick={() => setIsPopupOpen(false)}>
        <li>Dog</li>
        <li>Cat</li>
        <li>Giraffe</li>
        <li>Goat</li>
        <li>Duck</li>
        <li>Monkey</li>
        <li>Bull</li>
        <li>Pig</li>
      </ul>
    </div>
  );
}
