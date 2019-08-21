import React from 'react';
import './styles/App.scss';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Tech from './Tech';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <About />
        <Portfolio />
        <Tech />
      </div>
    </div>
  );
}

export default App;
