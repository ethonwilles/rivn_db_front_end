import React from "react";
import { Link } from "react-router-dom";

import Cookies from "js-cookie";
import EditVendor from "../../EditVendor";

const Card = props => {
  return (
    <div classname="card">
      <h1>{props.name}</h1>
      <img src={props.img} alt="Logo" />
      <h3>
        <Link
          to="/edit-vendor"
          onClick={() => {
            Cookies.set("edit-vendor-click", props.id);
          }}
        >
          Vendor ID: <span>{props.id}</span>
        </Link>
      </h3>
    </div>
  );
};

export default Card;
