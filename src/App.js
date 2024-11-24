import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Import CartProvider
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import ShopSingle from './pages/ShopSingle';
import CheckOut from './pages/CheckOut';

export default function App() {
    return (
        <CartProvider>
            <div className='overflow'>
                <Router>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact-us' element={<Contact />} />
                        <Route path='/shop' element={<Shop />} />
                        <Route path='/shop-single' element={<ShopSingle />} />
                        <Route path='/checkout' element={<CheckOut />} />
                    </Routes>
                </Router>
            </div>
        </CartProvider>
    );
}
