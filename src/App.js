import React from 'react';
import Button from './Button'
import './App.css';
import './Grid.css'
import BabyNamesData from './babyNamesData.json';

function App() {
  return (
    <div className="App container">
      <div className = "main-div row">
          <Button results = {BabyNamesData}/>
      </div>
      
    </div>
  );
}

export default App;
