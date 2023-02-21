import React from 'react';
import Items from './components/Items';
import Player from './components/Player';
import NavLeft from './components/NavLeft';
import NavBottom from './components/NavBottom';
import NavTop from './components/NavTop';

function App() {
  return (
    <div className="App bg-gradient-to-b from-indigo-900 to-black h-screen w-screen">
      <header className="App-header">
        <NavLeft />
        <NavBottom />
        <NavTop />
      </header>
    </div>
  );
}

export default App;
