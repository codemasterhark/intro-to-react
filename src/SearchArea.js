import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import * as AppContant from "./AppConstant";

const SearchArea = () => {
  const [keyword, setKeyword] = useState("budgies");
  const [videos, setVideos] = useState([]);
  const [order, setOrder] = useState("relevance");
  const orderList = ["date", "relevance", "rating"];

  async function requestSearch() {
    axios
      .get(`${AppContant.SEARCH_URL}&q=${keyword}`)
      .then((res) => {
        const { items } = res.data;
        console.log(items);
        setVideos(items || []);
      })
      .catch((err) => console.log(err));

    console.log("Video request submitted");
  }

  return (
    <div className="search-area">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestSearch();
        }}
      >
        <label htmlFor="keyword">
          Search
          <input
            id="keyword"
            value={keyword}
            placeholder="Search Keyword"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </label>
        <label htmlFor="advance">
          Advanced Search
          <input type="checkbox" id="advance" />
        </label>
        <label htmlFor="order">
          Order
          <select
            id="order"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            onBlur={(e) => setOrder(e.target.value)}
          >
            {orderList.map((orderName) => (
              <option key={orderName} value={orderName}>
                {orderName}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results videos={videos} />
    </div>
  );
};

export default SearchArea;
