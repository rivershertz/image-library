import ImagesGrid from './ImagesGrid';
import ActionBar from './ActionBar';

function Main() {
  return (
    <>
      <h1 className="mb-5 uppercase tracking-wider">Image Library</h1>
      <ActionBar />
      <ImagesGrid />
    </>
  );
}

export default Main;
