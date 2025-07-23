import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/Contact';
import NotFound from './NotFound/NotFound';
import Header from './Header/Header';
import Footer from './Footer/Footer'; // Import Footer component

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
  return (
  <BrowserRouter>
  {/* <Header /> */}
  <Routes>
    {/* <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound/>}/> */}
    <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
           {/* Now wrapped in Layout */}
        </Route>
        <Route path="*" element={<NotFound />} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
