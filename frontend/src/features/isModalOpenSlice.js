import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
};

const isModalOpenSlice = createSlice({
  name: 'isModalOpen',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export default isModalOpenSlice.reducer;
export const {toggle} = isModalOpenSlice.actions;
