import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecommendedMovies } from '../store/RecommendationSlice';
import MovieList from './MovieList';
import Loader from './Loader';

const RecommendedMovie = ({ id }) => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.recommendedMovie);

  useEffect(() => {
    dispatch(fetchRecommendedMovies(id));
  }, [dispatch, id]);

  if (status === 'loading') return <Loader />;
  if (status === 'error') return <p className="text-red-500">Error fetching recommendations</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">Recommended Movies</h2>
      {data.results && data.results.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {data.results.slice(0, 10).map((movie) => (
            <MovieList key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-gray-300">No recommendations available for this movie.</p>
      )}
    </div>
  );
};

export default RecommendedMovie;