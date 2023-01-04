import React from 'react';
import { useParams } from 'react-router-dom';
import '../tora.scss';
import { objBereshit } from '../../object/bereshit/obj-bereshit';
import LinksChapter from '../links-chapter/LinksChapter';

const Beresheet = () => {
  let count = 1;
  const { id } = useParams();
  let arrBereshit = {};

  {
    id
      ? (arrBereshit = objBereshit.filter(
          (ret) => ret.id_chapter == id
        ))
      : (arrBereshit = objBereshit.filter((items) => items.id_chapter === 1));
  }

  return (
    <div className="book">
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
