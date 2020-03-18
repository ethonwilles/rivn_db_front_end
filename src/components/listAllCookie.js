import React from "react";
import Header from "./header";
import NavBar from "./NavBar";

import Cookies from "./body_components/cookie-components/cookies";
import URLS from "./body_components/cookie-components/urls";

const ListAllCookie = () => {
  const [check, setCheck] = React.useState(true);
  return (
    <div className="NewVendor">
      <Header />
      <div className="page-wrapper">
        <NavBar />
        <div className="body-content">
          <div className="button-wrapper button-cookie">
            <button
              onClick={() => {
                setCheck(true);
              }}
            >
              Cookies
            </button>
            <button
              onClick={() => {
                setCheck(false);
              }}
            >
              URL
            </button>
          </div>
          <div className="list-content-wrapper">
            {check ? <Cookies /> : <URLS />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListAllCookie;
