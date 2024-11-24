import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Banner from '../components/Banner';
import Category from '../components/Category';
import Product from '../components/Product';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Modal />
      <Banner />
      <Category />
      <Product />
      <Footer />
    </div>
  )
}
