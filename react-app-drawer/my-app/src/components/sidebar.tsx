import { FaBars } from 'react-icons/fa';
import { BsShop } from 'react-icons/bs';
import { GiEagleEmblem } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div
      className={isOpen ? 'hamburger-open' : 'hamburger-closed'}
      onClick={handleOpen}>
      <div className="icon-colors">
        <FaBars size={30} />
      </div>
      {isOpen ? <h2 className="hs-text">Hylian Shopping</h2> : ''}
      <Link to="about" className="icon-colors">
        <GiEagleEmblem size={30} className="icon-colors" />
        {isOpen ? <span>About</span> : ''}
      </Link>
      <Link to="/" className="icon-colors">
        <BsShop size={30} />
        {isOpen ? <span>Catalog</span> : ' '}
      </Link>
    </div>
  );
}
