import { useState } from 'react';
import './AppDrawer.css';
import { FaBars } from 'react-icons/fa';

type Menu = {
  id: number;
  name: string;
};

type AppDrawerProps = {
  menuList: Menu[];
};

export default function AppDrawer({ menuList }: AppDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="image">
      <div onClick={() => setIsOpen(!isOpen)}>
        <FaBars className="menu-icon" />
      </div>

      <div className={isOpen ? 'menu-drawer is-open' : 'menu-drawer'}>
        <MenuList menuList={menuList} />
      </div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={isOpen ? 'menu-shade is-drawn' : 'menu-shade'}></div>
    </div>
  );
}

type MenuListProps = {
  menuList: Menu[];
};

function MenuList({ menuList }: MenuListProps) {
  const list = menuList.map((item) => {
    return (
      <div key={item.id} className="menu-item">
        {item.name}
      </div>
    );
  });
  return (
    <>
      <h2 className="menu-heading">Menu</h2>
      <div className=".menu-items">{list}</div>
    </>
  );
}
