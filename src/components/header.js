import React from 'react';

import rivnLogo from "../images/rivn_logo.png"

const Header = () => {
    return <div className="header">
    <div className="image-div">
    <img src={rivnLogo} alt="RivnLogo"></img>
    <h1>DB</h1>
    </div>
    <div className="search-bar">
    <input type="text" placeholder="Query Database..."/>
    </div>
   </div>;
}
 
export default Header;