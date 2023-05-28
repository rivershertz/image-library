import {useSelector, useDispatch} from 'react-redux';
import {fetchImages} from '../features/imagesSlice';
import {toggle} from '../features/isModalOpenSlice';
import {updateCurrentImage} from '../features/currentImageSlice';
import {useEffect} from 'react';

function ImagesGrid() {
  const images = useSelector((store) => store.images);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  const handleImageClick = (imageData) => {
    dispatch(updateCurrentImage(imageData));
    dispatch(toggle());
  };
  return (
    <div
      className={
        images.images.length
          ? 'grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center'
          : ''
      }
    >
      {images.loading && <h2>Loading...</h2>}
      {!images.loading && images.error && (
        <h2 className="text-center">Error: {images.error}</h2>
      )}
      {images.images.length > 0 &&
        images.images.map((image) => {
          return (
            <div
              key={image.id}
              className=""
            >
              <button
                className="w-full"
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image.previewURL}
                  alt="click the button to open image a large version of the image with additional data"
                />
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default ImagesGrid;
