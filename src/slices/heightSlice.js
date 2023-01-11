import { createSlice } from '@reduxjs/toolkit';

const heightSlice = createSlice({
  name: 'height',
  initialState: {
    heightArr: 0,
    heightHeader: 0,
  },
  reducers: {
    showHeight: (state, action) => {
      state.heightArr = action.payload;
    },
    showHeightHeader: (state, action) => {
      state.heightHeader = action.payload;
    },
  },
});

export const { showHeight, showHeightHeader } = heightSlice.actions;

export default heightSlice.reducer;
