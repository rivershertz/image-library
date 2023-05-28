import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import api from '../api';

const initialState = {
  isLoading: false,
  value: 'backgrounds',
};

export const fetchUpdatedCategory = createAsyncThunk(
  'category/updateCategory',
  async (category) => {
    const images = await api.updateCategory(category);
    return images;
  }
);

const categorySlice = createSlice({
  name: 'categorySlice',
  initialState,
  reducers: {
    updateCategory: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUpdatedCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUpdatedCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.value = action.payload;
    });
    builder.addCase(fetchUpdatedCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.value = null;
      state.error = action.error.message;
    });
  },
});

export default categorySlice.reducer;
export const {updateCategory} = categorySlice.actions;
