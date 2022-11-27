import React, { useState } from 'react';
import './tora.scss';
import { objBereshit } from '../object/bereshit/obj-bereshit'; 
import LinksChapter from './links-chapter/LinksChapter';
import Nav from '../navigation/Nav'

const Tora = () => {
  const [modalActive, setModalActive] = useState(false);
  
  let count = 1;
 
  const beresheet = objBereshit.filter((items) => items.id_chapter === 1)

  console.log(beresheet)

  const name = objBereshit[0];
  return (
    <div className="book">
      <Nav />
      <LinksChapter active={modalActive} setActive={setModalActive}/>
      <div className="book__name">{name.name} | {name.chapter} | ГЛАВА {name.id_chapter}</div>

      {beresheet.map((items) => (
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

export default  Tora;
