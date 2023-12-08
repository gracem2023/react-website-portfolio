import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import AboutContent from '../AboutContent'

export default function About() {
  return (
    <>
    <h1 className='about'>ABOUT</h1>
    <AboutContent />
    <Footer />
  </>
  );
}