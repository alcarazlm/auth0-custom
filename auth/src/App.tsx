import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Secure from './components/Secure';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Secure />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Register />} />
        </Routes>
        {/* </a> */}
      {/* </header> */}
    </div>
  );
}

export default App;
