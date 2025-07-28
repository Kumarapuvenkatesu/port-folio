import React, { lazy, Suspense } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import useThemeChange from './Custom-hook/useTheme-change'; 
import Header from './Header/Header'; 
import Footer from './Footer/Footer';
import './App.css'; 
// Lazy-loaded pages
const Home = lazy(() => import('./components/Home/Home'));
const About = lazy(() => import('./components/About/About'));
const Projects = lazy(() => import('./components/Projects/projects'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const NotFound = lazy(() => import('./NotFound/NotFound'));

const Layout = () => (
  <>
    <Header />
    <main className='main-content'>
      <Outlet />
    </main>
    <Footer />
  </>
);

function App() {
  useThemeChange(); 
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
