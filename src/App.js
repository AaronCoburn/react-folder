import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header2 from './components/Header2';
// import Image from './components/Picture';
import Imagess from './components/Picture';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
        Learning React
        </h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          This is my frist experiment react project for learning more!
        </p>        
        <Header2></Header2>
        <Imagess></Imagess>
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
