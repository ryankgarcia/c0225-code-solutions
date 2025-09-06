import { FaBars } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};

export function Sidebar({ menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="dflex">
      <div
        className={isOpen ? 'hamburger-open' : 'hamburger-closed'}
        onClick={handleOpen}>
        <div className="icon-colors">
          <FaBars size={30} />
        </div>
        {isOpen ? <h2 className="hs-text">Hylian Shopping</h2> : ''}
        <ul>
          {menuItems.map((menu) => (
            <li key={menu.name}>
              <Link to={menu.path} className="icon-colors margin-bottom">
                <img src={menu.iconUrl} className="img-size" />
                {isOpen ? <span>{menu.name}</span> : ''}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
