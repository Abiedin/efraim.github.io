import React, { useState } from 'react';
import { FaTh, FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './sidebar.scss';

const Sidebar = () => {
  const [isOpend, setIsOpend] = useState(false);
  const toogle = () => setIsOpend(!isOpend);

  const menuItem = [
    {
      path: '/tora/beresheet',
      name: 'BERESHIT',
      icon: '/images/sidebar/bereshit.png',
    },
    {
      path: '/tora/schmot',
      name: 'SHMOT',
      icon: '/images/sidebar/shmot.png',
    },
    {
      path: '/tora/vaikra',
      name: 'VAIKRA',
      icon: '/images/sidebar/vaikra.png',
    },
    {
      path: '/tora/bemitbar',
      name: 'BEMITBAR',
      icon: '/images/sidebar/bemitbar.png',
    },
    {
      path: '/tora/dvarim',
      name: 'DVARIM',
      icon: '/images/sidebar/dvarim.png',
    },
  ];

  /*const fabars = document.getElementById('fabars');
  const sidebar = document.querySelector('.sidebar');
  fabars.addEventListener('click', () => {
    sidebar.style.display = 'none';
    document.body.style.overflow = 'hidden';
  });*/

  return (
    <div style={{ width: isOpend ? '300px' : '50px' }} className="sidebar">
      <div
        style={{ paddingLeft: isOpend ? '-10px' : '10px' }}
        className="favbar"
        onClick={toogle}
      >
        <FaBars />
      </div>
      {menuItem.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className="sidebar-link"
          style={{
            paddingLeft: isOpend ? '40px' : '10px',
          }}
          activeclassName="sidebar__active"
        >
          <div className="sidebar-icon">
            <img src={item.icon} className="sidebar-icon-img"></img>
          </div>
          <div
            style={{ display: isOpend ? 'block' : 'none' }}
            className="link-text"
          >
            {item.name}
          </div>
        </NavLink>
      ))}
    </div>
  );
};
export default Sidebar;
