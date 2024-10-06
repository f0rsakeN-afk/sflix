import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import SingleMovieDetails from './pages/SingleMovieDetails';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';
import ScrollToTop from './components/ScrollToTop'

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie/:id" element={<SingleMovieDetails />} />
        <Route path="/search/:query" element={<SearchResults />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
    <ScrollToTop/>
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 mt-16">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;