/* eslint-disable react/prop-types */
import {useSelector} from 'react-redux';

function ImageModal({closeModal}) {
  const keysToDisplay = [
    'id',
    'collections',
    'comments',
    'downloads',
    'likes',
    'views',
  ];

  const currentImage = useSelector((store) => store.currentImage.currentImage);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full grid place-items-center bg-[rgba(0,0,0,0.38)]"
        role="dialog"
        tabIndex="-1"
      >
        <div className="max-w-[80vw] z-10 fixed">
          <button
            className="absolute -top-16 right-0 font-bold border border-slate-100"
            onClick={closeModal}
          >
            Close
          </button>
          <img
            src={currentImage.webformatURL}
            alt={`An image of ${currentImage.tags}`}
            className="rounded-t-lg"
          />
          <div className="bg-[rgb(213,213,213)] text-black rounded-b-lg">
            {keysToDisplay.map((key) => {
              return (
                <p
                  className="py-1"
                  key={key}
                >
                  <span className="font-bold">{key}</span>: {currentImage[key]}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageModal;
