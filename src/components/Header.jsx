import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaBars, FaTimes, FaFilm } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery('');
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-80 backdrop-blur-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
            <span className="flex items-center">
              <FaFilm className="mr-2" />
              SFlix
            </span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <NavLink to="/" className={({ isActive }) => `text-lg font-semibold transition-colors duration-300 ${isActive ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => `text-lg font-semibold transition-colors duration-300 ${isActive ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}>About</NavLink>
          </nav>
          <form onSubmit={handleSearch} className="hidden md:flex items-center">
            <motion.input 
              whileFocus={{ scale: 1.05 }}
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search movies..." 
              className="bg-gray-900 text-white px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
            />
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              type="submit" 
              className="bg-gradient-to-r from-yellow-400 to-red-600 text-white px-6 py-2 rounded-r-full transition duration-300"
            >
              <FaSearch />
            </motion.button>
          </form>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black bg-opacity-90 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <NavLink to="/" className="text-white hover:text-yellow-400 text-lg font-semibold py-2" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              <NavLink to="/about" className="text-white hover:text-yellow-400 text-lg font-semibold py-2" onClick={() => setIsMenuOpen(false)}>About</NavLink>
              <form onSubmit={handleSearch} className="flex items-center">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search movies..." 
                  className="bg-gray-900 text-white px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 flex-grow"
                />
                <button type="submit" className="bg-gradient-to-r from-yellow-400 to-red-600 text-white px-6 py-2 rounded-r-full transition duration-300">
                  <FaSearch />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;