// React imports
import React from 'react';
import { useEffect } from 'react';

// UI component imports
import TestDisplay from './components/TestDisplay';
import ClassSelect from './components/ClassSelect';

function App() {
  return (
    <div className="App bg-gradient-to-b from-indigo-900 to-black h-screen w-screen">
      <header className="App-header">
        <ClassSelect />
      </header>
    </div>
  );
}

export default App;
