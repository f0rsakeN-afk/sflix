import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieReviews } from '../store/ReviewsSlice';
import { FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Loader from './Loader';


const Reviews = ({ id }) => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.movieReviews);
  const [expandedReviews, setExpandedReviews] = useState({});

  useEffect(() => {
    dispatch(fetchMovieReviews(id));
  }, [dispatch, id]);

  const toggleReview = (reviewId) => {
    setExpandedReviews(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId]
    }));
  };

  if (status === 'loading') return <Loader />;
  if (status === 'error') return <p className="text-red-500">Error fetching reviews</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">Reviews</h2>
      {data.results && data.results.length > 0 ? (
        <div className="space-y-6">
          {data.results.map((review) => (
            <div key={review.id} className="bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <img
                  src={`https://ui-avatars.com/api/?name=${review.author}&background=random`}
                  alt={review.author}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{review.author}</h3>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span>{review.author_details.rating || 'N/A'}</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-gray-300">
                  {expandedReviews[review.id]
                    ? review.content
                    : `${review.content.slice(0, 150)}...`}
                </p>
                {review.content.length > 150 && (
                  <button
                    onClick={() => toggleReview(review.id)}
                    className="text-yellow-400 mt-2 flex items-center"
                  >
                    {expandedReviews[review.id] ? (
                      <>
                        Read less <FaChevronUp className="ml-1" />
                      </>
                    ) : (
                      <>
                        Read more <FaChevronDown className="ml-1" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-300">No reviews available for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;