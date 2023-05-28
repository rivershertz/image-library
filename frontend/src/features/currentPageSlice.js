import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 1,
  isIncremented: true,
};

const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.value += 1;
      state.isIncremented = true;
    },
    decrementPage: (state) => {
      state.value -= 1;
      state.isIncremented = false;
    },
  },
});

export default currentPageSlice.reducer;
export const {incrementPage, decrementPage} = currentPageSlice.actions;
