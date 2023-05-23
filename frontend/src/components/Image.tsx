import React from 'react';

function Image({imageData, onImageClick}) {
  const handleImageClick = () => {
    onImageClick(imageData);
  };

  return (
    <>
      <button
        key={imageData.id}
        onClick={handleImageClick}
      >
        <img
          src={imageData.previewURL}
          alt=""
        />
      </button>
    </>
  );
}

export default Image;
