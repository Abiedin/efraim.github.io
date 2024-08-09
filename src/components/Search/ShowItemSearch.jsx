import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const ShowItem = () => {
  const sIdBoo = useSelector((state) => state.par.stIdBook);
  const sIdChap = useSelector((state) => state.par.stIdChapter);
  const data = JSON.parse(localStorage.getItem('tanahArr'));
  const location = useLocation();
  let nowArr = [];

  

  return (
   
  );
};

export default ShowItem;
