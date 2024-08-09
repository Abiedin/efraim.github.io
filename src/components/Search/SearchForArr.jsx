import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ArrSearchSteate } from '../../slices/heightSlice';
import './search.scss';

const SearchArr = () => {
  // localStorage. clear()
  const dispatch = useDispatch();
  let steateWord = useSelector((state) => state.par.steateSearch);
  const data = JSON.parse(localStorage.getItem('tanahArr')).reverse();

  
};

export default SearchArr;
