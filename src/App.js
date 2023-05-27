import React,{ useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=fc7533ac";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [seachTerm , setSeachTerm] = useState('');

  const searchMovie = async (title ,category) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
  
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovie(`marvel`);
  }, []);

  return (
    <div className="start bg-black">
      <h1 className="flex justify-center tittle text-4xl text-blue-500 py-16 ">MovieHub</h1>

      <div className="Search flex justify-center space-x-2">
        <input
        className="p-2 rounded-lg"
          placeholder="Search for movies"
          value={seachTerm}
          onChange={(e) => setSeachTerm(e.target.value)}
        />
        <img className="w-10 h-10" src="favicon.ico" alt="search" onClick={() => searchMovie(seachTerm) } />
      </div>


      {movies?.length > 0 ? (
        <div className="movieCard my-10 grid grid-cols-2 md:grid-cols-4 overflow-hidden ">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imbdID}/>
          ))}
        </div>
      ) : (
        <div className="empty">
          <p>No Movies Found</p>
        </div>
      )}
    </div>
  );
};

export default App;
