/* eslint-disable @typescript-eslint/no-explicit-any */
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
  const [showHeading, setShowHeading] = useState('');

  function handleSelectedItem(clickedHeading: any): void {
    setIsOpen(!isOpen);
    setShowHeading(clickedHeading.target.innerHTML);
    console.log(clickedHeading.target.innerHTML);
  }

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}>
        <FaBars className="menu-icon" />
      </div>

      <div id="page-heading">
        <h1 className={showHeading ? 'page-heading' : 'hidden'}>
          {showHeading}
        </h1>
      </div>

      <div className={isOpen ? 'menu-drawer is-open' : 'menu-drawer'}>
        <h2 className="menu-heading">Menu</h2>
        {menuList.map((menuItem) => {
          return (
            <MenuItem
              menuItem={menuItem}
              onSelect={(clickedHeading) => handleSelectedItem(clickedHeading)}
            />
          );
        })}
      </div>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={isOpen ? 'menu-shade is-drawn' : 'menu-shade'}></div>
    </>
  );
}

type MenuListProps = {
  menuItem: Menu;
  onSelect: (clickedHeading: any) => void;
};

function MenuItem({ menuItem, onSelect }: MenuListProps) {
  return (
    <div
      className="menu-item"
      onClick={(clickedHeading) => onSelect(clickedHeading)}>
      {menuItem.name}
    </div>
  );
}

// import { useState } from 'react';
// import './AppDrawer.css';
// import { FaBars } from 'react-icons/fa';

// type Menu = {
//   id: number;
//   name: string;
// };

// type AppDrawerProps = {
//   menuList: Menu[];
// };

// export default function AppDrawer({ menuList }: AppDrawerProps) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="image">
//       <div onClick={() => setIsOpen(!isOpen)}>
//         <FaBars className="menu-icon" />
//       </div>

//       <div className={isOpen ? 'menu-drawer is-open' : 'menu-drawer'}>
//         <MenuList menuList={menuList} />
//       </div>
//       <div
//         onClick={() => setIsOpen(!isOpen)}
//         className={isOpen ? 'menu-shade is-drawn' : 'menu-shade'}></div>
//     </div>
//   );
// }

// type MenuListProps = {
//   menuList: Menu[];
// };

// function MenuList({ menuList }: MenuListProps) {
//   const list = menuList.map((item) => {
//     return (
//       <div key={item.id} className="menu-item">
//         {item.name}
//       </div>
//     );
//   });
//   return (
//     <>
//       <h2 className="menu-heading">Menu</h2>
//       <div className=".menu-items">{list}</div>
//     </>
//   );
// }
