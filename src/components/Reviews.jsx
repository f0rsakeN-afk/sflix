import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieReviews } from "../store/ReviewsSlice";
import { FaStar } from "react-icons/fa";
import { STATUSES } from "../store/MoviesSlice";
import Loader from "./Loader";

const Reviews = ({ id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieReviews(id));
  }, []);

  const { data, status } = useSelector((state) => state.movieReviews);
  //console.log(data);
  if (status === STATUSES.LOADING) return <Loader />;
  return (
    <div className="pt-4 overflow-hidden">
      {data.total_results > 0 && (
        <>
          <h2 className="text-2xl font-semibold pb-2 text-red-500">
            Movie Reviews
          </h2>
          <div className=" divide-y-2 flex flex-col gap-2 ">
            {data?.results?.map((r) => (
              <div className="py-2" key={r.id}>
                <section className="flex items-center gap-2 pb-2">
                  {" "}
                  <img
                    src={`https://image.tmdb.org/t/p/w500${r.author_details.avatar_path}`}
                    className="rounded-full aspect-square  h-16"
                    alt="user-image"
                  />
                  <h2 className="capitalize text-orange-600 text-2xl font-bold">
                    {r.author_details.username}
                  </h2>
                  <span className="flex items-center text-red-500 text-xl font-bold gap-1">
                    {r.author_details.rating}
                    <FaStar className="text-yellow-600" />
                  </span>
                </section>
                <p className="text-gray-200 text-xs">{r.content}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Reviews;
