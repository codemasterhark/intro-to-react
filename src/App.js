import React from "react";
import ReactDOM from "react-dom";
import Video from "./Video";
import SearchArea from "./SearchArea";

const App = () => {
  return (
    <div>
      <header>
        <a href="#">WeTube</a>
      </header>
      <SearchArea />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
