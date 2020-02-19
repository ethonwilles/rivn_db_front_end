import React from "react";

import Card from "./body_components/list_all_components/Card";
import Header from "./header";
import NavBar from "./NavBar";

const ListAll = () => {
  const [allVendors, setAllVendors] = React.useState(false);

  React.useEffect(() => {
    fetch("https://rivn-db-backend.herokuapp.com/list-all-vendors")
      .then(res => res.json())
      .then(data => setAllVendors(data.vendors.sort()));
  }, []);
  const renderVendors = () => {
    if (allVendors) {
      return allVendors.map(elem => {
        console.log(elem);
        return (
          <Card
            name={elem.name}
            id={elem.vendor_id}
            img={`https://static.rivn.com/images/vendors/${elem.image}`}
          />
        );
      });
    }
  };
  return (
    <div className="list-all">
      <Header />
      <div className="page-wrapper">
        <NavBar />
        <div className="list-all-content">{renderVendors()}</div>
      </div>
    </div>
  );
};
export default ListAll;
