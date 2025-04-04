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
    // Set background image dynamically using PUBLIC_URL
    document.body.style.backgroundImage = `url(${process.env.PUBLIC_URL}/assets/jpeg/107141768_l.jpg)`;
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundColor = '#111';
  }, []);

  return (
    <Router basename="/">
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
