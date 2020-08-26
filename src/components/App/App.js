import React from 'react';

import './App.css';
import BabylonViewer from '../BabylonViewer'
import Drawer from '../Drawer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Drawer></Drawer>
      </header>
    </div>
  );
}

export default App;
