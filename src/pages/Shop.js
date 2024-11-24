import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ShopContent from '../components/ShopContent';
import Brand from '../components/Brand';
import Footer from '../components/Footer';

export default function Shop() {
  return (
    <div>
      <Navbar />
      <Header />
      <ShopContent />
      <Brand />
      <Footer />
    </div>
  )
}
