import React from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate"; // recommend
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = ({ movie }) => {
  return (
    <div className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="videoImage"
      />
      <h2>{movie.title || movie.original_name}</h2>

      <TextTruncate
        line={2}
        element="span"
        truncateText="…"
        text={movie.overview}
      />
      <div className="movie__date-and-likes">
        <p>{movie.release_date || movie.first_air_date}</p>
        <p className="vote__icon-and-count">
          <ThumbUpIcon style={{ marginRight: "10px" }} />
          {movie.vote_count}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
