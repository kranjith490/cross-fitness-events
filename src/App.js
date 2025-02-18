import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, EventGalleryPage } from './pages';
import { Navbar } from './component';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { IconButton } from '@mui/material';
import './App.css';

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Show the button when scrolled down 100px
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <div style={{ width: '100%', height: '100vh' }}>
        <Navbar />
        <div style={{ height: '90%', width: '100%', paddingTop: '50px' }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/events/:id" element={<EventGalleryPage />} />
          </Routes>
        </div>
        {showButton && (
          <div
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              position: 'fixed',
              bottom: '20px', // Adjusted for bottom-right corner
              right: '20px',
              background: '#1c7b7b',
              zIndex: 10000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
              cursor: 'pointer'
            }}
          >
            <IconButton
              style={{ color: 'white' }}
              fontSize="small"
              onClick={() => {
                handleScrollTo();
              }}
            >
              <ArrowUpwardIcon />
            </IconButton>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
