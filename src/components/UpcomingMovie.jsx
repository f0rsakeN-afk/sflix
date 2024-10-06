import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpcomingMovies } from '../store/UpcomingSlice';
import MovieList from './MovieList';
import Loader from './Loader';

const UpcomingMovie = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.upcomingMovie);

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  if (status === 'loading') return <Loader />;
  if (status === 'error') return <p className="text-red-500">Error fetching upcoming movies</p>;

  return (
    <section>
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">Coming Soon</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {data?.results?.slice(0, 10).map((movie) => (
          <MovieList key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default UpcomingMovie;