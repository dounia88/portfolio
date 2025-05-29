import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Nav from './layouts/nav';
import Projets from './pages/projects/projets';
import Contact from './pages/contact/contact';
import About from './pages/about/about';

const App = () => {
  return (
    <>
     
     <Nav/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projets />} />
      <Route path="/contact" element={<Contact />} />
     
     </Routes>
     
    </>
  );
};

export default App;