import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';
import Navigation from './components/Navigation';
import BackgroundVideo from './components/BackgroundVideo';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="relative">
          <BackgroundVideo />
          <LanguageSwitcher />
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;