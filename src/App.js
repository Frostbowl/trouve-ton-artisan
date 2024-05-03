import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Header from './pages/header/Header';
import Home from './pages/main/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;