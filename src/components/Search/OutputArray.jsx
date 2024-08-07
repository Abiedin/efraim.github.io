import React, { useState, useRef } from 'react';
import { styled } from '@mui/system';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { stateIdBook, stateIdChapter } from '../../slices/heightSlice';

import './search.scss';

const OutStyle = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column-reverse',
}));

const Out = () => {
  const steateWord = useSelector((state) => state.par.steateSearch);
  const steateArrSearch = useSelector((state) => state.par.ArrSearch);
  const dispatch = useDispatch();
  let myRef = useRef();

  if (steateWord && steateWord.length >= 2) {
    return (
      <OutStyle>
        {steateArrSearch.map((items, index) => (
          <NavLink
            to={`/tora/showitem#${items.poemNumber}`}
            className="search"
            key={index}
          >
            <div
              className="search-box"
              onClick={() => {
                dispatch(stateIdBook(items.id_book));
                dispatch(stateIdChapter(items.id_chapter));
              }}
            >
              <div className="search-chapter">
                <div className="">{items.chapter}</div>
                <div className="">{items.id_chapter}</div>
                <div>:</div>
                <div className="">{items.poemNumber}</div>
              </div>
              <div className="">{items.verse}</div>
            </div>
          </NavLink>
        ))}
      </OutStyle>
    );
  }
};

export default Out;
