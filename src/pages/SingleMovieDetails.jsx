import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { fetchMovieDetails } from "../store/MovieDetailsSlice";
import { fetchMovieImages } from "../store/MoreImagesSlice";
import {
  FaStar,
  FaClock,
  FaCalendar,
  FaDollarSign,
  FaGlobe,
  FaChevronLeft,
  FaChevronRight,
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
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 5;

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
    dispatch(fetchMovieImages(id));
  }, [dispatch, id]);

  const nextPage = () => {
    setCurrentPage((prevPage) =>
      (prevPage + 1) * imagesPerPage >= images.backdrops.length
        ? 0
        : prevPage + 1,
    );
  };

  const prevPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0
        ? Math.floor((images.backdrops.length - 1) / imagesPerPage)
        : prevPage - 1,
    );
  };

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
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Gallery</h2>
            <div className="relative">
              <div className="grid grid-cols-5 gap-4">
                <AnimatePresence initial={false}>
                  {images.backdrops
                    .slice(
                      currentPage * imagesPerPage,
                      (currentPage + 1) * imagesPerPage,
                    )
                    .map((image, index) => (
                      <motion.img
                        key={`${currentPage}-${index}`}
                        src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                        alt={`Movie scene ${currentPage * imagesPerPage + index + 1}`}
                        className="w-full h-40 object-cover rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      />
                    ))}
                </AnimatePresence>
              </div>
              {images.backdrops.length > imagesPerPage && (
                <>
                  <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                    onClick={prevPage}
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                    onClick={nextPage}
                  >
                    <FaChevronRight />
                  </button>
                </>
              )}
            </div>
            <p className="text-center mt-2 text-gray-400">
              Showing {currentPage * imagesPerPage + 1} -{" "}
              {Math.min(
                (currentPage + 1) * imagesPerPage,
                images.backdrops.length,
              )}{" "}
              of {images.backdrops.length} images
            </p>
          </motion.div>
        )}

        <motion.div variants={itemVariants}>
          <Reviews id={id} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <RecommendedMovie id={id} />
        </motion.div>
      </motion.div>
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

export default SingleMovieDetails;
