import {useEffect, useState} from 'react';
import api from './api';
import Main from './components/Main';
import ImageModal from './components/ImageModal';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentOpenImage, setCurrentOpenImage] = useState({});

  useEffect(() => {
    const getInitialImages = async () => {
      return await api.getInitialImages();
    };
    getInitialImages().then((res) => setImages(res.hits));
  }, []);

  useEffect(() => {}, [images]);

  const openModal = (cardData) => {
    setIsModalOpen(true);
    setCurrentOpenImage(cardData);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="font-primary">
      <Main
        initialImages={images}
        openModal={setIsModalOpen}
        onCardClick={openModal}
      />
      {isModalOpen && (
        <ImageModal
          isOpen={isModalOpen}
          imageData={currentOpenImage}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default App;
