import React from "react";
import Video from "./Video";

const Results = ({ videos }) => {
  return (
    <div className="search-result">
      {videos.map((video) => {
        return (
          <Video
            key={video.id.videoId}
            title={video.snippet.title}
            dateAdded={video.snippet.publishedAt}
            thumbnail={video.snippet.thumbnails.medium}
            channel={video.snippet.channelTitle}
            description={video.snippet.description}
          />
        );
      })}
    </div>
  );
};

export default Results;
