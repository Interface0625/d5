import React, {useState} from 'react';

import './App.css';
import BabylonViewer from '../BabylonViewer'
import Drawer from '../Drawer'

function App() {
  const [filename, setFilename] = useState('test.glb')
  return (
    <div className="App">
      <header className="App-header">
        <BabylonViewer filename={ filename } />
        <Drawer onFileSelect={ setFilename }></Drawer>
      </header>
    </div>
  );
}

export default App;
