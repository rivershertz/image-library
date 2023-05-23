import Image from './Image';

function Main({
  initialImages,
  onCardClick,
  onPaginationClick,
  onChangeCategoryClick,
}) {

  
  return (
    <>
      <h1 className="mb-5 uppercase tracking-wider">Image Library</h1>
      <div className="w-full flex justify-between mb-5">
        <button onClick={}>&#8249; prev</button>
        <button onClick={}>change category</button>
        <button onClick={}>next &#8250;</button>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {initialImages.map((image) => {
          return (
            <Image
              key={image.id}
              imageData={image}
              onImageClick={onCardClick}
            />
          );
        })}
      </div>
    </>
  );
}

export default Main;
