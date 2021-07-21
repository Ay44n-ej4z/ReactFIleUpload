import { useState } from 'react';
import './App.css';
import Images from './Components/Images';
import Modal from './Components/Modal';
import Title from './Components/Title';
import Upload from './Components/Upload';

function App() {
  const [selectedImg, setSelectedImg] = useState(null) 
  
  return (
    <div className="App">
      <Title/>
     <Upload />
     <Images setSelectedImg = {setSelectedImg}/>
    {selectedImg && <Modal selectedImg = {selectedImg} setSelectedImg = {setSelectedImg} />}
    </div>
  );
}

export default App;
