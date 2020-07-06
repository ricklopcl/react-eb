import React from 'react';
import logo from './logo.svg';
import rocket from './rocket.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={rocket} className="rocket-logo" alt="rocket" style={{width: '550px'}} />
        <p>
          Rocket App
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
