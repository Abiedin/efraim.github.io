import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'postN',
  initialState: {
    postsArr: [],
  },
  reducers: {
    deletePost: (state, action) => {
     
    },
  
  },

});

export const {  deletePost } = todoSlice.actions;

export default todoSlice.reducer;
