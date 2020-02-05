import React from "react";

import Header from "./header";
import NavBar from "./NavBar";
import EditCatalog from "./body_components/edit-page-components/EditCatalog";
import EditVendorForm from "./body_components/edit-page-components/EditVendorForm";

import "../styles/main.scss";

const EditVendor = props => {
  const [check, setCheck] = React.useState(true);
  const [currentVendor, setCurrentVendor] = React.useState("");

  const [vendors, setVendors] = React.useState([
    "Salesforce",
    "Google Analytics",
    "Adobe Analytics",
    "Google Ads"
  ]);

  const renderVendors = () => {
    return vendors.map(elem => {
      return <option value={elem}>{elem}</option>;
    });
  };
  return (
    <div className="edit-vendor">
      <Header />
      <div className="page-wrapper">
        <NavBar />
        <div className="body-content">
          <div className="selection">
            <select
              onChange={e =>
                setCurrentVendor(e.target.options[e.target.selectedIndex].text)
              }
            >
              <option value="0">Choose Vendor..</option>
              {renderVendors()}
            </select>
            <h2>Or</h2>
            <input
              className="edit-search"
              type="text"
              placeholder="Search by Vendor ID.."
            />
          </div>
          <div className="button-wrapper-edit">
            <button onClick={() => setCheck(true)}>Catalog</button>
            <h2>{currentVendor === "" ? "Choose Vendor" : currentVendor}</h2>
            <button onClick={() => setCheck(false)}>VendorForm</button>
          </div>
          {check === true ? <EditCatalog /> : <EditVendorForm />}
        </div>
      </div>
    </div>
  );
};

export default EditVendor;
