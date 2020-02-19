import React from "react";
import Cookies from "js-cookie";

import Header from "./header";
import NavBar from "./NavBar";
import EditCatalog from "./body_components/edit-page-components/EditCatalog";
import EditVendorForm from "./body_components/edit-page-components/EditVendorForm";

import "../styles/main.scss";

const EditVendor = props => {
  const [check, setCheck] = React.useState(true);
  const [currentVendor, setCurrentVendor] = React.useState("");
  const [vendorInfo, setVendorInfo] = React.useState([]);

  const [showStyle, setShowStyle] = React.useState("hidden");
  const [createdText, setCreatedText] = React.useState("");
  
  const [vendorCookie, setVendorCookie] = React.useState(
    !Cookies.get("edit-vendor-click") ? false : Cookies.get("edit-vendor-click")
  );
  const vendorSelected = e => {
    e.preventDefault();
    fetch(
      [
        check === true
          ? "https://rivn-db-backend.herokuapp.com/get-vendor-catalog"
          : "https://rivn-db-backend.herokuapp.com/get-vendor-form"
      ],
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ vendor_id: currentVendor, method: "vendor_id" })
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setVendorInfo(data);
        if (data.USER_FOUND === false) {
          setCreatedText("Vendor Does Not Exist! Try Again..");
          setShowStyle("visible");
        } else if (data.name) {
          setShowStyle("hidden");
        }
      });
  };
  const checkVendor = e => {
    if (vendorCookie) {
      document.querySelector(".edit-search").value = vendorCookie;
      setCurrentVendor(vendorCookie);
    }
  };

  React.useEffect(() => {
    checkVendor();
  }, []);
  return (
    
    <div className="edit-vendor">
      <Header />
      <div className="page-wrapper">
        <NavBar />
        <div className="body-content">
          <div className="selection">
            <form className="top-wrapper" onSubmit={vendorSelected}>
              <input
                className="edit-search"
                type="text"
                placeholder="Search by Vendor ID.."
                onClick={e => setVendorCookie(false)}
                onChange={e => setCurrentVendor(e.target.value)}
                InnerHTML={vendorCookie}
              />
              <p classname="determiner" style={{ visibility: showStyle }}>
                {createdText}
              </p>
              <button className="submit-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="button-wrapper-edit">
            <button onClick={() => setCheck(true)}>Catalog</button>
            <h2>{currentVendor === "" ? "Choose Vendor" : vendorInfo.name}</h2>
            <button onClick={() => setCheck(false)}>VendorForm</button>
          </div>
          {check === true ? (
            <EditCatalog vendor={currentVendor} vendorInfo={vendorInfo} />
          ) : (
            <EditVendorForm vendor={currentVendor} vendorInfo={vendorInfo} />
          )}
        </div>
      </div>
    </div>
    
  );
};

export default EditVendor;
