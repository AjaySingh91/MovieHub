import React from "react";

const MovieCard = ({movie}) => {
  return (
    <div className="cardItem">  <div className="card space-x-10 mx-10 my-6">
      <a href="www.google.com"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow w-80 md:max-w-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover items-center w-fit  rounded-t-lg h-96 md:rounded-none md:rounded-l-lg"
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
          alt=""
        />
        <div className="flex flex-col p-4 leading-normal">
          <h5 className="mb-2 tracking-tight text-gray-900 dark:text-slate-200">
            {movie.Type} ({movie.Year})
          </h5>
          <p className="mb-3 text-2xl font-bold text-gray-700 dark:text-gray-100">
           {movie.Title}
          </p>
        </div>
      </a>
    </div>
    </div>
  
  );
};
export default MovieCard;
