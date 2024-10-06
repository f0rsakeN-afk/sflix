import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="relative w-24 h-24 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        {/* Projector light */}
        <motion.div 
          className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Film strip */}
        <motion.div 
          className="absolute top-8 left-0 w-48 h-8 flex"
          animate={{ x: [-96, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(4)].map((_, index) => (
            <div key={index} className="w-12 h-8 border-2 border-gray-600 flex-shrink-0">
              <div className="w-full h-full bg-gray-700 m-px" />
            </div>
          ))}
        </motion.div>

        {/* Sprocket wheels */}
        <motion.div 
          className="absolute top-6 left-2 w-4 h-4 border-2 border-gray-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-6 right-2 w-4 h-4 border-2 border-gray-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Loading text */}
        <div className="absolute bottom-2 left-0 right-0 text-center text-xs text-yellow-400 font-bold">
          LOADING
        </div>
      </div>
    </div>
  );
};

export default Loader;