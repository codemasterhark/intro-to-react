import React from "react";
import ReactDOM from "react-dom";
import SearchArea from "./SearchArea";
import { Router, Link } from "@reach/router";
import WatchArea from "./WatchArea";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">WeTube</Link>
      </header>

      <Router>
        <SearchArea path="/" />
        <WatchArea path="/watch/:id" />
      </Router>
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
