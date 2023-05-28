import Main from './components/Main';
import ImageModal from './components/ImageModal';
import {useSelector, useDispatch} from 'react-redux';
import {toggle} from './features/isModalOpenSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((store) => store.openModal.isModalOpen);

  return (
    <div className="font-primary box-border">
      <Main />
      {isModalOpen && (
        <ImageModal
          isOpen={isModalOpen}
          closeModal={() => dispatch(toggle())}
        />
      )}
    </div>
  );
}

export default App;
