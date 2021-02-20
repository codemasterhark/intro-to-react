import React from "react";
import { Link } from "@reach/router";

const Video = (props) => {
  return (
    <Link to={`/watch/${props.id}`} className="video-container">
      <div className="video-image">
        <img src={props.thumbnail.url} alt={props.title} />
      </div>
      <div className="video-info">
        <h3>{props.title}</h3>
        <p>{props.dateAdded}</p>
        <h4>{props.channel}</h4>
        <p>{props.description}</p>
      </div>
    </Link>
  );
};

export default Video;
