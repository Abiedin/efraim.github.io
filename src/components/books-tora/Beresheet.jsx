import React from 'react';
import { useParams } from 'react-router-dom';
import '../tora.scss';
import { objBereshit } from '../../object/bereshit/obj-bereshit';  
import LinksChapter from '../links-chapter/LinksChapter';
import Nav from '../../navigation/Nav'

const Beresheet = () => {
  let count = 1;
  const { id } = useParams();
  const arr = objBereshit.filter((ret) => ret.id_chapter == id)

  return (
    <div className="book">
      <Nav />
      <LinksChapter />
      <div className="book__name">{arr[0].name} | {arr[0].chapter} | ГЛАВА {arr[0].id_chapter}</div>

      {arr.map((items) => (
        <div className="chapter" key={count++}>
           <div className="chapter__ch">
              <div className="chapter__number" >{items.id}</div>
              <div className="chapter__title">{items.verse}</div>
            </div>
              <div className="chapter__comment">{items.comment}</div>
        </div>
      ))}
      <LinksChapter />
    </div>
  );
};

export default  Beresheet;
