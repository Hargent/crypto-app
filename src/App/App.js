import './App.css';

import Converter from '../Converter/Converter';
import News from '../News/News';
import React from 'react';

const App = () => {
  return (
    <div className="app__container">
      <Converter/>
      <News/>
    </div>
  )
}

export default App
