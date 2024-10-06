import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuery, STATUSES1 } from '../store/SearchSlice';
import MovieList from '../components/MovieList';
import Loader from '../components/Loader';

const SearchResults = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.queries);

  useEffect(() => {
    dispatch(fetchQuery(query));
  }, [dispatch, query]);

  if (status === STATUSES1.LOADING) return <Loader />;
  if (status === STATUSES1.ERROR) return <p className="text-red-500">Error fetching search results</p>;

  return (
    <div>
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">Search Results for &ldquo;{query}&rdquo;</h2>
      {data.results && data.results.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {data.results.map((item) => (
            item.media_type === 'movie' && <MovieList key={item.id} movie={item} />
          ))}
        </div>
      ) : (
        <p className="text-gray-300">No results found for &ldquo;{query}&rdquo;</p>
      )}
    </div>
  );
};

export default SearchResults;