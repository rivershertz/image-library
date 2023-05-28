import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import api from '../api';

const initialState = {
  isLoading: false,
  images: [],
  next: {},
  prev: {},
  error: '',
};

export const fetchImages = createAsyncThunk('images/fetchImages', async () => {
  const images = await api.getInitialImages();
  return images;
});

export const fetchUpdatedCategory = createAsyncThunk(
  'images/updateCategory',
  async (category) => {
    const images = await api.updateCategory(category);
    return images;
  }
);

export const paginateToNext = createAsyncThunk(
  'images/paginateToNext',
  async ({page, category}) => {
    const images = await api.paginateToNext(page, category);
    return images;
  }
);
export const paginateToPrev = createAsyncThunk(
  'images/paginateToPrev',
  async ({page, category}) => {
    const images = await api.paginateToPrev(page, category);
    return images;
  }
);

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  extraReducers: (builder) => {
    // fetchImages cases
    builder.addCase(fetchImages.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      state.images = action.payload.data;
      state.isLoading = false;
      state.next = action.payload.next;
      state.prev = action.payload.prev;
      state.error = '';
    });
    builder.addCase(fetchImages.rejected, (state, action) => {
      state.isLoading = false;
      state.images = [];
      state.error = action.error.message;
    });

    // fetchUpdatedCategory cases
    builder.addCase(fetchUpdatedCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUpdatedCategory.fulfilled, (state, action) => {
      state.images = action.payload.data;
      state.isLoading = false;
      state.next = action.payload.next;
      state.prev = action.payload.prev;
      state.error = '';
    });
    builder.addCase(fetchUpdatedCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.images = [];
      state.error = action.error.message;
    });

    // paginateToNext
    builder.addCase(paginateToNext.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(paginateToNext.fulfilled, (state, action) => {
      state.images = action.payload.data;
      state.isLoading = false;
      state.next = action.payload.next;
      state.prev = action.payload.prev;
      state.error = '';
    });
    builder.addCase(paginateToNext.rejected, (state, action) => {
      state.isLoading = false;
      state.images = [];
      state.error = action.error.message;
    });

    // paginateToPrev
    builder.addCase(paginateToPrev.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(paginateToPrev.fulfilled, (state, action) => {
      state.images = action.payload.data;
      state.isLoading = false;
      state.next = action.payload.next;
      state.prev = action.payload.prev;
      state.error = '';
    });
    builder.addCase(paginateToPrev.rejected, (state, action) => {
      state.isLoading = false;
      state.images = [];
      state.error = action.error.message;
    });
  },
});

export default imagesSlice.reducer;
