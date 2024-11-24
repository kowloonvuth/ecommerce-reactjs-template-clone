import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import ShopSingle from './pages/ShopSingle';

export default function App() {
  return (
    <div className='overflow'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop-single' element={<ShopSingle />} />
        </Routes>
      </Router>
    </div>
  )
}
