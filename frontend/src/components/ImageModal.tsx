import {log} from 'console';
import React, {useEffect} from 'react';

interface Props {
  imageData: {id: number; tags: string; webformatURL: string};
  closeModal: () => void;
}

function ImageModal({imageData, closeModal}: Props) {
  const keysToDisplay = [
    'id',
    'collections',
    'comments',
    'downloads',
    'likes',
    'views',
  ];

  useEffect(() => {}, []);
  return (
    <>
      <div className="fixed top-0 right-0 w-full h-full grid place-items-center bg-[rgba(0,0,0,0.38)]">
        <div className="relative ">
          <button
            className="absolute -top-16 -right-16 font-bold border border-slate-100"
            onClick={closeModal}
          >
            Close
          </button>
          <img
            src={imageData.webformatURL}
            alt={`An image of ${imageData.tags}`}
            className="max-w-[800px] rounded-t-lg"
          />
          <div className="bg-[rgb(213,213,213)] text-black rounded-b-lg">
            {keysToDisplay.map((key) => {
              return (
                <p className="py-1">
                  <span className="font-bold">{key}</span>: {imageData[key]}
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
