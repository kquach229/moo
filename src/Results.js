import React, { useState, useEffect } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import axios from "./axios";

const Results = ({ selectedOption }) => {
  const [movies, setMovies] = useState([1, 2, 3]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedOption]);
  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Results;
