import React from "react";
import ReactDOM from "react-dom";
import Video from "./Video";
import SearchArea from "./SearchArea";

const App = () => {
  return (
    <div>
      <h1>WeTube</h1>
      <SearchArea />
      <Video
        title="The Best Video"
        dateAdded="2 days ago"
        channel="News Channel"
      />
      <Video
        title="Cool Video Title"
        dateAdded="5 days ago"
        channel="Local Channel"
      />
      <Video
        title="Learning Video Title"
        dateAdded="1 week ago"
        channel="Learning Channel"
      />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
