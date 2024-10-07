import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { fetchMovieDetails } from "../store/MovieDetailsSlice";
import { fetchMovieImages } from "../store/MoreImagesSlice";
import PropTypes from 'prop-types';
import {
  FaStar,
  FaClock,
  FaCalendar,
  FaDollarSign,
  FaGlobe,
  FaTimes,
} from "react-icons/fa";
import Loader from "../components/Loader";
import Reviews from "../components/Reviews";
import RecommendedMovie from "../components/RecommendedMovie";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const SingleMovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: movie, status } = useSelector((state) => state.movieDetails);
  const { data: images } = useSelector((state) => state.movieImages);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
    dispatch(fetchMovieImages(id));
  }, [dispatch, id]);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  if (status === "loading") return <Loader />;
  if (status === "error")
    return <p className="text-red-500">Error fetching movie details</p>;

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-12"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col lg:flex-row gap-8"
        >
          <motion.img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full lg:w-1/3 rounded-lg shadow-lg"
            variants={itemVariants}
          />
          <motion.div variants={itemVariants} className="lg:w-2/3">
            <h1 className="text-4xl font-bold text-yellow-400 mb-4">
              {movie.title}
              <span className="ml-2 text-sm bg-yellow-400 text-gray-900 px-2 py-1 rounded">
                {movie.original_language}
              </span>
            </h1>
            <p className="text-xl text-gray-300 italic mb-4">{movie.tagline}</p>
            <p className="text-gray-300 mb-6">{movie.overview}</p>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6"
            >
              <InfoItem
                icon={FaStar}
                label="Rating"
                value={`${movie.vote_average?.toFixed(1)}/10`}
              />
              <InfoItem
                icon={FaClock}
                label="Runtime"
                value={`${movie.runtime} min`}
              />
              <InfoItem
                icon={FaCalendar}
                label="Release Date"
                value={movie.release_date}
              />
              <InfoItem
                icon={FaDollarSign}
                label="Budget"
                value={`$${movie.budget?.toLocaleString()}`}
              />
              <InfoItem
                icon={FaDollarSign}
                label="Revenue"
                value={`$${movie.revenue?.toLocaleString()}`}
              />
              <InfoItem icon={FaGlobe} label="Status" value={movie.status} />
            </motion.div>

            {movie.genres && (
              <motion.div variants={itemVariants} className="mb-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  Genres
                </h3>
                <motion.div
                  variants={containerVariants}
                  className="flex flex-wrap gap-2"
                >
                  {movie.genres.map((genre) => (
                    <motion.span
                      key={genre.id}
                      variants={itemVariants}
                      className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {genre.name}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {movie.spoken_languages && (
              <motion.div variants={itemVariants} className="mb-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  Languages
                </h3>
                <motion.div
                  variants={containerVariants}
                  className="flex flex-wrap gap-2"
                >
                  {movie.spoken_languages.map((lang, index) => (
                    <motion.span
                      key={index}
                      variants={itemVariants}
                      className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {lang.english_name}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {movie.production_companies && (
              <motion.div variants={itemVariants} className="mb-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  Production Companies
                </h3>
                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-2 md:grid-cols-3 gap-4"
                >
                  {movie.production_companies.map((company) => (
                    <motion.div
                      key={company.id}
                      variants={itemVariants}
                      className="bg-gray-800 p-4 rounded-lg text-center"
                    >
                      {company.logo_path && (
                        <img
                          src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                          alt={company.name}
                          className="h-16 object-contain mx-auto mb-2"
                        />
                      )}
                      <p className="text-sm font-semibold">{company.name}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {movie.homepage && (
              <motion.a
                href={movie.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full hover:bg-yellow-500 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Official Website
              </motion.a>
            )}
          </motion.div>
        </motion.div>

        {images.backdrops && images.backdrops.length > 0 && (
          <motion.div variants={itemVariants} className="mt-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Gallery</h2>
            <div className="relative overflow-x-auto">
              <div className="flex space-x-4 pb-4 -mx-4 px-4 overflow-x-scroll scrollbar-hide">
                {images.backdrops.map((image, index) => (
                  <div 
                    key={index} 
                    className="flex-none w-64 h-36 md:w-80 md:h-44 cursor-pointer"
                    onClick={() => openModal(index)}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                      alt={`Movie scene ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        <motion.div variants={itemVariants}>
          <Reviews id={id} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <RecommendedMovie id={id} />
        </motion.div>
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-screen bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-7xl max-h-screen p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrops[currentImageIndex].file_path}`}
                alt={`Movie scene ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white text-2xl"
                onClick={closeModal}
              >
                <FaTimes />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const InfoItem = ({ icon: Icon, label, value }) => (
  <motion.div
    className="flex items-center bg-gray-800 p-3 rounded-lg"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    variants={itemVariants}
  >
    <Icon className="text-yellow-400 mr-3 text-xl" />
    <div>
      <span className="text-gray-400 text-sm">{label}</span>
      <p className="font-semibold">{value}</p>
    </div>
  </motion.div>
);

InfoItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default SingleMovieDetails;