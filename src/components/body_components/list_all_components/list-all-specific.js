import React from "react";
import Cookies from "js-cookie";

import Header from "../../header";
import NavBar from "../../NavBar";
import Card from "./Card";

const ListAllSpecific = props => {
  const [inputVal, setInputVal] = React.useState("");
  const [vendors, setAllVendors] = React.useState(false);

  React.useEffect(() => {
    setInputVal(Cookies.get("query-filter"));
    console.log("loop");
  });
  React.useEffect(() => {
    fetch("https://admin-dev.rivn.com/list-all-vendors")
      .then(res => res.json())
      .then(data => setAllVendors(data.vendors.sort()));
  }, []);

  const renderVendor = () => {
    if (vendors) {
      return vendors.map(elem => {
        if (elem.name == inputVal) {
          return (
            <Card
              name={elem.name}
              id={elem.vendor_id}
              img={`https://static.rivn.com/images/vendors/${elem.image}`}
            />
          );
        }
      });
    }
  };
  return (
    <div className="list-all-specific">
      <Header />
      <div className="page-wrapper">
        <NavBar />
        <div className="list-all-specific-content">{renderVendor()}</div>
      </div>
    </div>
  );
};
export default ListAllSpecific;
