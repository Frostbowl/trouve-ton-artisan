import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import Header from './pages/header/Header';
import Footer from './pages/footer/Footer';
import Home from './pages/main/Home';
import Batiment from './pages/main/Batiment';
import Service from './pages/main/Service';
import Fabrication from './pages/main/Fabrication';
import Alimentation from './pages/main/Alimentation';
import Mentions from './pages/main/Mention';
import Data from './pages/main/Data';
import Accessibility from './pages/main/Accessibility';
import Cookies from './pages/main/Cookies';
import Artisan from './pages/main/Artisan';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/batiment' element={<Batiment/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/fabrication' element={<Fabrication/>}/>
        <Route path='/alimentation' element={<Alimentation/>}/>
        <Route path='/mention' element={<Mentions/>}/>
        <Route path='/data' element={<Data/>}/>
        <Route path='/access' element={<Accessibility/>}/>
        <Route path='/cookie' element={<Cookies/>}/>
        <Route path='/artisan/:id' element={<Artisan/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
