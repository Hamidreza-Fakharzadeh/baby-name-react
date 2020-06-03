import React from 'react';
import './App.css';
import './Grid.css'
import BabyNamesData from './babyNamesData.json';
import Search from './Search';


function App() {
  
  return (
    <div className="App container">
      <div className = "main-div row">
        <Search results = {BabyNamesData}/>
      </div>
    </div>
  );
}

export default App;
