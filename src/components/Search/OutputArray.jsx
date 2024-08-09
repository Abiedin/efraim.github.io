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
       
      </OutStyle>
    );
  }
};

export default Out;
