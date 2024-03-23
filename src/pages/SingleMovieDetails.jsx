import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../store/MovieDetailsSlice";
import { STATUSES } from "../store/MoviesSlice";
import Loader from "../components/Loader";
import { FaClock, FaStar } from "react-icons/fa";
import { BiSolidUpvote } from "react-icons/bi";
import { fetchMovieImages } from "../store/MoreImagesSlice";

const SingleMovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
    dispatch(fetchMovieImages(id));
  }, [dispatch, id]);

  const { data: movieData, status } = useSelector(
    (state) => state.movieDetails
  );

  const { data: images } = useSelector((state) => state.movieImages);
  //console.log(images);

  if (status === STATUSES.LOADING) return <Loader />;
  if (status === STATUSES.ERROR) return <p className="">Error fetching data</p>;

  return (
    <>
      <div className="pt-8 grid grid-cols-4 gap-4 ">
        <div className="col-span-3">
          <h2 className="text-5xl font-semibold text-yellow-500 space-x-2 pb-4">
            {movieData.original_title}
            <span className="uppercase p-1 m-1 text-red-500 bg-yellow-500 rounded-sm text-xs">
              {movieData.original_language}
            </span>
          </h2>
          <h3 className="font-md text-orange-600 italic underline underline-offset-2 font-semibold">
            {movieData.tagline}
          </h3>
          <p className="text-gray-200 font-semibold">{movieData.overview}</p>
          {movieData.genres ? (
            <ul className="flex  py-2 items-center gap-4">
              {movieData.genres.map((genre) => (
                <li
                  key={genre.id}
                  className="px-3 py-2 bg-gray-200 text-gray-700 font-bold uppercase rounded-full"
                >
                  {genre.name}
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
          <div className="flex gap-4 py-2 items-center ">
            <h3 className="text-gray-800 px-3 py-2 bg-gray-300 rounded-full">
              Release Date:
              <span className="text-red-600 font-semibold">
                {movieData.release_date}
              </span>
            </h3>
            <span className="px-3 py-2 bg-gray-200 rounded-full text-red-600 flex items-center gap-1 font-semibold">
              {movieData.runtime}
              <FaClock className="text-yellow-600" />
            </span>
            <span className="px-3 py-2 bg-gray-200 rounded-full text-red-600 flex items-center gap-1 font-semibold">
              {movieData.vote_average}
              <FaStar className="text-yellow-500" />
            </span>
            <span className="px-3 py-2 bg-gray-200 rounded-full text-red-600 flex items-center gap-1 font-semibold">
              Vote Count:{movieData.vote_count}
              <BiSolidUpvote className="text-yellow-500" />
            </span>
          </div>

          <section className="flex gap-4 py-1">
            {movieData.budget ? (
              <h3 className="text-xl text-gray-300 font-semibold">
                Budget:
                <span className="text-red-600 italic ">
                  ${movieData.budget}
                </span>
              </h3>
            ) : (
              ""
            )}
            {movieData.revenue ? (
              <h2 className="text-xl font-semibold text-gray-300">
                Revenue:
                <span className="text-green-600 italic">
                  ${movieData.revenue}
                </span>
              </h2>
            ) : (
              ""
            )}
          </section>

          {movieData.spoken_languages ? (
            <section className="flex py-2 items-center">
              <span className="text-gray-300 font-semibold">
                Spoken Languages:{" "}
              </span>
              <ul className="flex gap-2 text-gray-300 items-center ">
                {movieData.spoken_languages.map((lang) => (
                  <li className="" key={lang.id}>
                    {lang.english_name},
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            ""
          )}

          {movieData.production_companies ? (
            <section className="border p-2 w-max rounded-xl">
              <h2 className="text-2xl font-semibold pb-2 text-red-500">
                Production Companies
              </h2>
              <ul className="grid grid-cols-4 gap-4 pt-1">
                {movieData.production_companies.map((company) => (
                  <div className="flex gap-1 items-center justify-center flex-col p-1 bg-gray-50 rounded-md">
                    <img
                      className="h-16 w-28"
                      alt="company-poster"
                      src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
                    />
                    <li
                      className="text-gray-800 font-bold uppercase"
                      key={company.id}
                    >
                      {company.name}
                    </li>
                  </div>
                ))}
              </ul>
            </section>
          ) : (
            ""
          )}

          {movieData.homepage ? (
            <h2 className="pt-3 text-gray-400">
              For more info visit{" "}
              <a
                href={movieData.homepage}
                target="_blank"
                className="text-blue-500"
              >
                {movieData.homepage}
              </a>
            </h2>
          ) : (
            ""
          )}
        </div>
        <div className="">
          <img
            className="rounded-sm shadow-lg"
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt="poster"
            loading="lazy"
          />
        </div>
      </div>
      {images.backdrops ? (
        <div className="">
          <h2 className=" text-2xl text-yellow-600 font-semibold  pb-2">
            More Images
          </h2>
          <div className="flex overflow-x-scroll no-scrollbar">
            {images.backdrops.map((photo) => (
              <img src={`https://image.tmdb.org/t/p/w500${photo.file_path}`} alt="movie-images" className="rounded-sm" loading="lazy" />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SingleMovieDetails;
