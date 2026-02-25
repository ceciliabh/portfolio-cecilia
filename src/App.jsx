import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ThemeContext } from './contexts/ThemeContext';
import { Main, BlogPage } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'
import ParticlesBackground from "./components/ParticlesBackground";

import './App.css'

function App() {

  return (
    <div className="relative min-h-screen overflow-hidden animated-bg min-h-screen">
      <ParticlesBackground />

      <div className="relative z-10">
          <BrowserRouter>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      
      <BackToTop />
      </div>
    </div>
  );
}

export default App;
