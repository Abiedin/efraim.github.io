import React from 'react';
import { NavLink } from 'react-router-dom';
import { objBeresheet } from '../../object/beresheet/obj-beresheet';
import './chapter-link.scss';

const LinksChapter = ({ active, setModalActive }) => {
  const arr = objBeresheet?.map((items) => items.id_chapter);
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto', //smooth
    });
  };
console.log(result)
  return (
    <div className="chapter-link">
      {result.map((item) => (
        <NavLink
          to={`/tora/beresheet/${item}`}
          key={item}
          className={active ? 'chapter-link-item active' : 'chapter-link-item'}
          onClick={scrollUp}
        >
          <div
            onClick={() => {
              setModalActive(true);
            }}
          >
            {item}
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default LinksChapter;
