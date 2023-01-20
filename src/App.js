import React from 'react'
import "./index.css"
import Home from './components/Home';
import About from './components/About';
import Contact from './Contact';
import Project from './components/Project';
import SocialLinks from './components/SocialLinks'
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import { Route, Routes } from 'react-router-dom';

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
