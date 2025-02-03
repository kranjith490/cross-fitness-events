import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, EventGalleryPage } from './pages';
import { Navbar } from './component';
import './App.css';

function App() {
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
      </div>
    </Router>
  );
}

export default App;
