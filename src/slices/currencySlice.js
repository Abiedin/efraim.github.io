import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 } from 'uuid';

export const getCurrency = createAsyncThunk(
  'exchange/getCurrency',
  async (_, { rejectWithValue, dispatch}) => {
    try {
      const response = await axios.get(
        'https://alpha-vantage.p.rapidapi.com/query'
      );

      

      dispatch(showCurrency(response));

      if (!response) {
        throw new Error('Can/t get post. Server error.');
      }

      console.log("axios", response)

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  console.log('rejected')
  state.status = 'rejected'
  state.error = action.payload
 }
 

const currencySlice = createSlice({
  name: 'exchange',
  initialState: {
    exchangeArr: [],
    status: null,
    error: null,
  },
  reducers: {
    showCurrency: (state, action) => {
      state.exchangeArr = action.payload;
      console.log("state: = ", state.exchangeArr)
    },
  },
  extraReducers: {
    [getCurrency.pending]: (state) => {
      console.log('pending')
      state.status = 'loading'
      state.error = null
    },
    [getCurrency.fulfilled]: (state, action) => {
      console.log('fulfilled')
      state.status = 'fulfilled'
      state.exchangeArr = action.payload
    },
    [getCurrency.rejected]: setError,
  },
});

export const { showCurrency } = currencySlice.actions;

export default currencySlice.reducer;
