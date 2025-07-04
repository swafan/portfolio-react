import React, { useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Writings from './Components/Writings/Writings'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import WritingDetail from './Components/Writings/WritingDetail'
import Background from './assets/placeholder_background.jpg'
import './App.css'

const MainContent = ({ bgImgRef }) => {
  const location = useLocation();
  const isWritingDetail = location.pathname.startsWith('/writings/');
  return (
    <div className="app-root">
      {!isWritingDetail && (
        <div className="navbar-hero-group">
          <Hero />
          <Navbar />
        </div>
      )}
      <Routes>
        <Route path="/" element={
          <>
            <About />
            <Writings />
            <Projects />
            <Contact />
          </>
        } />
        <Route path="/writings/:slug" element={<WritingDetail />} />
      </Routes>
      {!isWritingDetail && (
        <div className="navbar-hero-bg-wrapper">
          <img ref={bgImgRef} src={Background} alt="background"
            className="navbar-hero-bg-img" draggable={false}/>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const bgImgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgImgRef.current) {
        const offset = window.scrollY * 0.3;
        bgImgRef.current.style.transform = `translateY(${offset}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <MainContent bgImgRef={bgImgRef} />
    </Router>
  )
}

export default App