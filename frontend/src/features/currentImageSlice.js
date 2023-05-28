import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  currentImage: {},
};

const currentImageSlice = createSlice({
  name: 'currentImage',
  initialState,
  reducers: {
    updateCurrentImage: (state, action) => {
      state.currentImage = action.payload;
    },
  },
});

export default currentImageSlice.reducer;
export const {updateCurrentImage} = currentImageSlice.actions;
