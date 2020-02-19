import React from "react";

import EditContentItem from "../edit-page-components/editcontentitem";
import UniqueContent from "./uniquecontent";

const EditCatalog = props => {
  const currentVendor = props.vendor;
  const vendorInfo = props.vendorInfo;
  const [name, setName] = React.useState("");
  const [vendorID, setVendorID] = React.useState("");
  const [image, setImage] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [actionUrl, setActionUrl] = React.useState("");
  const [actionType, setActionType] = React.useState("");
  const [version, setVersion] = React.useState("");
  const [display, setDisplay] = React.useState("y");
  const [active, setActive] = React.useState("y");

  const [showStyle, setShowStyle] = React.useState("hidden");
  const [createdText, setCreatedText] = React.useState("");

  let data = {
    name: vendorInfo.name,
    vendor_id: vendorInfo.vendor_id,
    image: [image === "" ? vendorInfo.image : image],
    description: [desc === "" ? vendorInfo.description : desc],
    action_url: [actionUrl === "" ? vendorInfo.action_url : actionUrl],
    action_type: [actionType === "" ? vendorInfo.action_type : actionType],
    version: [version === "" ? vendorInfo.version : version],
    active: active,
    display: display
  };
  const handleSetData = (data, id) => {
    if (id === "Name") {
      setName(data);
    } else if (id === "Vendor ID") {
      setVendorID(data);
    } else if (id === "Action URL") {
      setActionUrl(data);
    } else if (id === "Action Type") {
      setActionType(data);
    } else if (id === "Version") {
      setVersion(data);
    } else if (id === "Image") {
      setImage(data);
    } else if (id === "Description") {
      setDesc(data);
    }
  };

  const handleSendData = e => {
    e.preventDefault();
    fetch("https://rivn-db-backend.herokuapp.com/edit-vendor-catalog", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      mode: "cors",
      body: JSON.stringify(data)
    })
      .then(data => data.json())
      .then(res => {
        console.log(res, res.CREATED);
        if (res.CREATED === true) {
          console.log("working");
          setCreatedText("Edited and Saved!");
          setShowStyle("visible");
        } else if (res.ALREADY_EXISTS === true) {
          setCreatedText("ERROR! Vendor Already exists in Database!");
          setShowStyle("visible");
        } else if (res.CREATED === false) {
          setCreatedText("ERROR! Did not Succed!!");
          setShowStyle("visible");
        }
      });
  };
  return (
    <div className="content-wrapper">
      <form onSubmit={handleSendData}>
        <EditContentItem
          header="Action URL"
          value={
            vendorInfo.action_url === null ? "null" : vendorInfo.action_url
          }
          handleAdd={handleSetData}
        />
        <EditContentItem
          header="Action Type"
          value={vendorInfo.action_type}
          handleAdd={handleSetData}
        />
        <EditContentItem
          header="Version"
          value={vendorInfo.version}
          handleAdd={handleSetData}
        />
        <EditContentItem
          header="Image"
          value={vendorInfo.image}
          handleAdd={handleSetData}
        />

        <UniqueContent
          header="Description"
          value={
            vendorInfo.description === null ? "null" : vendorInfo.description
          }
          handleAdd={handleSetData}
        />
        <div className="content-item-choice">
          <div className="item">
            <h2>Display</h2>
            <select
              onChange={e =>
                setDisplay(e.target.options[e.target.selectedIndex].text)
              }
            >
              <option value="Y">Y</option>
              <option value="N">N</option>
            </select>
          </div>
          <div className="item">
            <h2>Active</h2>
            <select
              onChange={e =>
                setActive(e.target.options[e.target.selectedIndex].text)
              }
            >
              <option value="Y">Y</option>
              <option value="N">N</option>
            </select>
          </div>
        </div>
        <div className="button-div-edit">
          <button type="submit">Submit</button>
          <p style={{ visibility: showStyle }}>{createdText}</p>
        </div>
      </form>
    </div>
  );
};
export default EditCatalog;
