import React, { useEffect, useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './sidebar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { showHeight } from '../../slices/heightSlice';
import UseOutsideAlerter from '../listenerClick/UseOutsideAlerter';

const Sidebar = () => {
  const [isOpend, setIsOpend] = useState(false);
  const [h, setH] = useState(0);
  const [w, setW] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const sliceHeightHeader = useSelector((state) => state.par.heightHeader);
  const { ref, isShow, setIsShow } = UseOutsideAlerter(false);
  let scrollTop = 0;

  const menuItem = [
    {
      path: '/tora/beresheet',
      name: 'BERESHEET',
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

  const toogle = () => {
    setIsOpend(!isOpend);
    setIsShow(!isShow);
  };
  const close = () => {
    if (isOpend) {
      setIsOpend(!isOpend);
      setIsShow(!isShow);
    }
  };

  useEffect(() => {
    if (!isShow) setIsOpend(false);
  }, [isShow]);

  window.onscroll = function () {
    scrollTop = window.pageYOffset
      ? window.pageYOffset
      : document.documentElement.scrollTop
      ? document.documentElement.scrollTop
      : document.body.scrollTop;
    setH(scrollTop);
    if (scrollTop >= 120) dispatch(showHeight(scrollTop));
  };

  useEffect(() => {
    const handleResize = () => {
      setW(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={ref}
      id="sidebarr"
      className="sidebar"
      style={{
        opacity: w > 450 && '0.9',
        width: w <= 450 && isOpend && '100%',
        height: w <= 450 && isOpend && '100%',
        zIndex: w <= 450 && isOpend ? '1' : '0',
        position: w <= 450 ? 'fixed' : 'static',
        background: w <= 450 && !isOpend && 'transparent',
        top:
          w <= 450 && sliceHeightHeader - h >= 0
            ? sliceHeightHeader - h
            : '0px',
      }}
    >
      <div>
        <div
          style={{
            paddingLeft: isOpend ? '-10px' : '11px',
            color: w <= 450 && !isOpend && 'black',
          }}
          className="favbar"
          onClick={toogle}
        >
          <FaBars />
        </div>
        <div
          className="link"
          style={{
            display: w <= 450 && !isOpend ? 'none' : 'block',
          }}
        >
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="sidebar-link"
              onClick={close}
              activeclassName="sidebar__active"
              style={{
                padding: w <= 450 && isOpend ? '20px 40px' : '20px 10px',
                padding:
                  w >= 450 && isOpend ? '20px 50px 20px 25px' : '20px 10px',
              }}
            >
              <div className="sidebar-icon">
                <img
                  src={item.icon}
                  className="sidebar-icon-img"
                  alt="icon"
                ></img>
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
      </div>
    </div>
  );
};
export default Sidebar;
