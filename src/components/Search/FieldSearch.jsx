import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/system';
import { showSearch } from '../../slices/heightSlice';
import SearchArr from './SearchForArr';
import { useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom';
import './search.scss';

const SearchStyle = styled('div')(() => ({
  display: 'flex',
  width: '30%',
  margin: '10px 0',
}));

const FieldSearch = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const regex = /^[A-Za-z0-9 _-]+$/;

  useEffect(() => {
    if (!search.includes(' ')) {
      dispatch(showSearch(search));
    }
  }, [search]);

  return (
    <SearchStyle>
      <SearchArr />

      <NavLink to="/tora/out" className="search-field">
        <TextField
          label="Search..."
          variant="outlined"
          style={{ marginBottom: 10, width: '100%',    }}
          //sx={{
          //"& > :not(style)": { height: "36px" },
          //}}
          onChange={(e) => setSearch(e.target.value)}
        />
      </NavLink>
    </SearchStyle>
  );
};

export default FieldSearch;
