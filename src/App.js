//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import About from './components/About';
import React, {useState} from 'react';
//import { Routes, Switch } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='rgb(11 9 63)';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='';
    }
  }
  return (
    <>
    <Router>
    <Navbar title="myTextapp" mode={mode} togglemode={toggleMode}/>
    <div className='container my-3'>
      <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<Text heading='Enter your text to analyze below' mode={mode}/> }/>
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
