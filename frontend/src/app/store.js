import {configureStore} from '@reduxjs/toolkit';

import imagesReducer from '../features/imagesSlice';
import isModalOpenReducer from '../features/isModalOpenSlice';
import currentImageReducer from '../features/currentImageSlice';
import currentPageSlice from '../features/currentPageSlice';
import categorySlice from '../features/categorySlice';

const store = configureStore({
  reducer: {
    images: imagesReducer,
    openModal: isModalOpenReducer,
    currentImage: currentImageReducer,
    currentPage: currentPageSlice,
    category: categorySlice,
  },
});

export default store;
