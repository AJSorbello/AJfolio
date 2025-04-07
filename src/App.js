import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import ProjectDetail from './pages/ProjectDetail';
import SocialSidebar from './components/SocialSidebar/SocialSidebar';

function App() {
  useEffect(() => {
    // Apply a consistent background for the entire site
    const backgroundImageUrl = `${process.env.PUBLIC_URL}/assets/jpeg/107141768_l.jpg`;
    console.log('Background image URL:', backgroundImageUrl); // Debug log
    
    // Apply background to body with a much lighter overlay to show the slate texture
    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImageUrl})`;
    document.body.style.backgroundAttachment = 'fixed'; // Keep background fixed while scrolling
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundColor = '#111';
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <SocialSidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
