import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ModalAbout from '../components/ModalAbout';
import Service from '../components/Service';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
        <Navbar />
        <Header />
        <ModalAbout />
        <Service />
        <Footer />
    </div>
  )
}
