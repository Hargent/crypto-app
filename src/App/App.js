import './App.css';

import Converter from '../Converter/Converter';
import News from '../News/News';
import React from 'react';

const App = () => {
  return (
    <div className="app__container">
      <h1>CRYPTO DASHBOARD</h1>
      <div className="app__container__content">
        <Converter/>
        <News/>
      </div>
    </div>
  )
}

export default App
