import {BrowserRouter as Router, Routes, Route, useLocation, } from 'react-router-dom';
import React from 'react';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Batiment from './pages/Batiment';
import Service from './pages/Service';
import Fabrication from './pages/Fabrication';
import Alimentation from './pages/Alimentation';
import Mentions from './pages/Mention';
import Data from './pages/Data';
import Accessibility from './pages/Accessibility';
import Cookies from './pages/Cookies';
import Artisan from './pages/Artisan';
import NotFound from './pages/NotFound';

function App() {


  const location = useLocation();
  const pathFound = ['/', '/batiment', '/service', '/fabrication', '/alimentation', '/mention', '/data', '/access', '/cookie', 
  '/artisan/1','/artisan/2','/artisan/3','/artisan/4','/artisan/5','/artisan/6','/artisan/7','/artisan/8','/artisan/9','/artisan/10',
  '/artisan/11','/artisan/12','/artisan/13','/artisan/14','/artisan/15','/artisan/16','/artisan/17',];
  const headerFooter = pathFound.includes(location.pathname); 

  return (
    <div className="App">
      {headerFooter && <Header/>}
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
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      {headerFooter && <Footer/>}
    </div>
  );
  
}



export default App;
