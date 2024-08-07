import { createSlice } from '@reduxjs/toolkit';

const heightSlice = createSlice({
  name: 'height',
  initialState: {
    heightArr: 0,
    heightHeader: 0,
    steateSearch: '',
    ArrSearch: [],
    stIdBook: 0,
    stIdChapter: 0,
  },
  reducers: {
    showHeight: (state, action) => {
      state.heightArr = action.payload;
    },
    showHeightHeader: (state, action) => {
      state.heightHeader = action.payload;
    },
    showSearch: (state, action) => {
      state.steateSearch = action.payload;
    },
    ArrSearchSteate: (state, action) => {
      state.ArrSearch = action.payload;
    },
    stateIdBook: (state, action) => {
      state.stIdBook = action.payload;
    },
    stateIdChapter: (state, action) => {
      state.stIdChapter = action.payload;
    },
  },
});

export const {
  showHeight,
  showHeightHeader,
  showSearch,
  ArrSearchSteate,
  stateIdBook,
  stateIdChapter,
} = heightSlice.actions;

export default heightSlice.reducer;
