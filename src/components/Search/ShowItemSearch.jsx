import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const ShowItem = () => {
  const sIdBoo = useSelector((state) => state.par.stIdBook);
  const sIdChap = useSelector((state) => state.par.stIdChapter);
  const data = JSON.parse(localStorage.getItem('tanahArr'));
  const location = useLocation();
  let nowArr = [];

  useEffect(() => {
    // Scroll to the hash element
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
      }
    }
  }, [location]);

  for (let i = 0; i < data.length; i++) {
    if (data[i].id_book === sIdBoo && data[i].id_chapter === sIdChap) {
      nowArr.push(data[i]);
    }
  }

  return (
    <div className="show-num">
      <div className="show-name-chapter">
        {nowArr[0].name} | {nowArr[0].chapter} {nowArr[0].id_chapter}
      </div>
      {nowArr.map((item, index) => (
        <div className="show-items" key={index} id={item.poemNumber}>
          <div className="show-number">
            <div className="">{item.id_chapter}</div>
            <div>:</div>
            <div className="">{item.poemNumber}</div>
          </div>
          <div className="chxcva">{item.verse}</div>
        </div>
      ))}
    </div>
  );
};

export default ShowItem;
