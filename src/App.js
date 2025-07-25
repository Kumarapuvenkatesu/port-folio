import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/Contact';
import NotFound from './NotFound/NotFound';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import useThemeChange from './Custom-hook/useTheme-change'; // Import Footer component

import { Outlet } from 'react-router-dom'; // Import Outlet for nested routes
import './App.css';

const Layout = () => (
  <>
    <Header />
    <Outlet /> 
    <Footer/>{/* This renders the matched child route */}
  </>
);

function App() {
  const { value } = useThemeChange(); 
  return (
  
  <Routes>
   
    <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
  </Routes>
 

  );
}

export default App;
