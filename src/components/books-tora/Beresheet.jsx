import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../tora.scss';
import { objBeresheet } from '../../object/obj-books/obj-beresheet';
import LinksChapter from '../links-chapter/LinksChapter';
import { useSelector } from 'react-redux';

const Beresheet = () => {
  const [w, setW] = useState(window.innerWidth);
  const sliceHeight = useSelector((state) => state.par.heightArr);
  let count = 1;
  const { id } = useParams();
  let arrBereshit = {};

  {
    id
      ? (arrBereshit = objBeresheet.filter((ret) => ret.id_chapter == id))
      : (arrBereshit = objBeresheet.filter((items) => items.id_chapter === 1));
  }

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
      className="book"
      style={{
        border: '2px solid black',
        margin: sliceHeight >= 120 && w < 450 ? '0 10px' : '0 20px',
      }}
    >
      <LinksChapter />
      <div className="book__name">
        {arrBereshit[0].name} | {arrBereshit[0].chapter} | ГЛАВА{' '}
        {arrBereshit[0].id_chapter}
      </div>

      {arrBereshit.map((items) => (
        <div className="chapter" key={count++}>
          <div className="chapter__ch">
            <div className="chapter__number">{items.id}</div>
            <div className="chapter__title">{items.verse}</div>
          </div>
          <div className="chapter__comment">{items.comment}</div>
        </div>
      ))}
      <LinksChapter />
    </div>
  );
};

export default Beresheet;
