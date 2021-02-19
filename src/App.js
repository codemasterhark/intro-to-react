import React from "react";
import ReactDOM from "react-dom";
import Video from "./Video";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, "WeTube"),
    React.createElement(Video, {
      title: "The best Video",
      dateAdded: "2 days ago",
      channel: "News Channel",
    }),
    React.createElement(Video, {
      title: "The cool Video",
      dateAdded: "3 days ago",
      channel: "Local Channel",
    }),
    React.createElement(Video, {
      title: "The learning Video",
      dateAdded: "6 days ago",
      channel: "Learning Channel",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
