import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Header from './pages/header/Header';
import Footer from './pages/footer/Footer';
import Home from './pages/main/Home';
import Mentions from './pages/main/Mention';
import Data from './pages/main/Data';
import Accessibility from './pages/main/Accessibility';
import Cookies from './pages/main/Cookies';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/mention' element={<Mentions/>}/>
        <Route path='/data' element={<Data/>}/>
        <Route path='/access' element={<Accessibility/>}/>
        <Route path='/cookie' element={<Cookies/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
