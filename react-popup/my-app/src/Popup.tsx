import { createPortal } from 'react-dom';
import './Popup.css';

type Props = {
  isPopupOpen: boolean;
  setIsPopupOpen: (open: boolean) => void;
  positionTo?: HTMLElement | null;
  onClose?: () => void;
};

export function Popup({
  isPopupOpen,
  setIsPopupOpen,
  positionTo,
  onClose,
}: Props) {
  if (!isPopupOpen) return null;

  let top = '50%';
  let left = '50%';

  if (positionTo) {
    const rect = positionTo.getBoundingClientRect();
    top = `${rect.bottom + 8}px`;
    left = `${rect.left}px`;
  }
  return createPortal(
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          backgroundColor: 'black',
          width: '100vw',
          height: '100vh',
          opacity: '.5',
          zIndex: 999,
          pointerEvents: 'auto',
        }}>
        <div style={{ position: 'absolute', top, left, zIndex: 1000 }}>
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
        </div>
      </div>
    </>,
    document.body
  );
}
