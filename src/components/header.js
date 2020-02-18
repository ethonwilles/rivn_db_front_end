import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

import rivnLogo from "../images/rivn_logo.png";

const Header = () => {
  const [queryValue, setQueryValue] = React.useState("");
  return (
    <div className="header">
      <div className="image-div">
        <img src={rivnLogo} alt="RivnLogo"></img>
        <h1>DB</h1>
      </div>
      <div className="search-bar">
        <Link to="/list-all-specific">
          <form onSubmit={e => {}}>
            <button type="submit" className="query-submit">
              Submit
            </button>
            <input
              type="text"
              placeholder="Query Database..."
              onChange={e => Cookies.set("query-filter", e.target.value)}
            />
          </form>
        </Link>
      </div>
    </div>
  );
};

export default Header;
