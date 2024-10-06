import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../store/MoviesSlice';
import MovieList from './MovieList';
import Loader from './Loader';

const Trending = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (status === 'loading') return <Loader />;
  if (status === 'error') return <p className="text-red-500">Error fetching trending movies</p>;

  return (
    <section>
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">Trending Now</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {data?.results?.slice(0, 10).map((movie) => (
          <MovieList key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default Trending;