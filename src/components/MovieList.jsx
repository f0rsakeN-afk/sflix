/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const MovieList = ({ movie }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link to={`/movie/${movie.id}`}>
        <motion.div
          className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white truncate group-hover:text-yellow-400">
              {movie.title}
            </h3>
            <div className="flex items-center mt-2">
              <FaStar className="text-yellow-400 mr-1" />
              <span className="text-gray-300">{movie.vote_average}</span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default MovieList;
