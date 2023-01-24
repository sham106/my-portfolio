import React from 'react'
import "./index.css"
import Home from './components/Home';
import About from './components/About';
import Contact from './Contact';
import SocialLinks from './components/SocialLinks'
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <SocialLinks/>
    <About/>
    <Portfolio/>
    <Experience/>
    <Contact/>
    <Footer/>
    
    </>
  );
}

export default App;
