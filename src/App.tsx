import React from 'react';
import './App.sass';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <div className="left">
        <List></List>
      </div>
      <div className="right">
        <List></List>
      </div>
    </div>
  );
}

export default App;
