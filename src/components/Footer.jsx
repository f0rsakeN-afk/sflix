import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">SFlix</h3>
            <p className="text-gray-300">Discover the magic of cinema</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/f0rsakeN-afk" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/f0rsaken/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400">
              <FaLinkedin size={24} />
            </a>
            <a href="https://x.com/NareshR13470926" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-300">
          <p>&copy; 2024 SFlix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;