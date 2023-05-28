import {useDispatch, useSelector} from 'react-redux';
import {
  paginateToNext,
  paginateToPrev,
  fetchUpdatedCategory,
} from '../features/imagesSlice';
import {updateCategory} from '../features/categorySlice';
import {incrementPage, decrementPage} from '../features/currentPageSlice';
import {useEffect} from 'react';

function ActionBar() {
  const categories = [
    'backgrounds',
    'fashion',
    'nature',
    'science',
    'education',
    'feelings',
    'health',
    'people',
    'religion',
    'places',
    'animals',
    'industry',
    'computer',
    'food',
    'sports',
    'transportation',
    'travel',
    'buildings',
    'business',
    'music',
  ];
  const images = useSelector((store) => store.images);
  const currentPage = useSelector((store) => store.currentPage);
  const category = useSelector((store) => store.category);

  const dispatch = useDispatch();

  const handleCategoryChange = (e) => {
    if (e.target.value) {
      const category = e.target.value;
      dispatch(fetchUpdatedCategory(category));
      dispatch(updateCategory(category));
    }
  };

  // handle pagination
  const handlePaginationNext = () => {
    dispatch(incrementPage());
  };

  const handlePaginationPrev = () => {
    dispatch(decrementPage());
  };

  useEffect(() => {
    const payload = {
      page: currentPage.value,
      category: category.value,
    };
    if (currentPage.isIncremented) {
      dispatch(paginateToNext(payload));
      return;
    }
    dispatch(paginateToPrev(payload));
  }, [category.value, currentPage, dispatch]);

  return (
    <div className="my-5 flex justify-between">
      <button
        className={
          !images.prev
            ? 'opacity-50 uppercase'
            : 'uppercase border-1 hover:border-blue-800 border-transparent'
        }
        onClick={handlePaginationPrev}
        disabled={!images.prev}
      >
        &#60; prev
      </button>
      <select
        className="uppercase p-2 rounded-md hover:cursor-pointer "
        onChange={(e) => handleCategoryChange(e)}
      >
        <option value="">change category</option>
        {categories.map((category) => {
          return (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          );
        })}
      </select>
      <button
        className={
          !images.next
            ? 'opacity-50 uppercase'
            : 'uppercase border-1 hover:border-blue-800 border-transparent'
        }
        onClick={handlePaginationNext}
        disabled={!images.next}
      >
        next &#62;
      </button>
    </div>
  );
}

export default ActionBar;
