import React from "react";

import EditContentItem from "./editcontentitem";
import UniqueContent from "./uniquecontent";

const EditVendorForm = props => {
  const vendorInfo = props.vendorInfo;

  const [name, setName] = React.useState("");
  const [vendorID, setVendorID] = React.useState("");
  const [actionType, setActionType] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [display, setDisplay] = React.useState("");
  const [pageVariableType, setPageVariableType] = React.useState("");
  const [pageVariableValue, setPageVariableValue] = React.useState("");
  const [version, setVersion] = React.useState("");
  const [fields, setFields] = React.useState("");
  const [active, setActive] = React.useState("y");

  const [showStyle, setShowStyle] = React.useState("hidden");
  const [createdText, setCreatedText] = React.useState("");

  let data = {
    name: vendorInfo.name,
    vendor_id: vendorInfo.vendor_id,
    description: [desc === "" ? vendorInfo.description : desc],
    page_variable_type: [
      pageVariableType === "" ? vendorInfo.page_variable_type : pageVariableType
    ],
    page_variable_value: [
      pageVariableValue === ""
        ? vendorInfo.page_variable_value
        : pageVariableValue
    ],
    action_type: [actionType === "" ? vendorInfo.action_type : actionType],
    fields: [fields === "" ? vendorInfo.fields : fields],
    version: [version === "" ? vendorInfo.version : version],
    active: active
  };

  const handleSetData = (data, id) => {
    if (id === "Name") {
      setName(data);
    } else if (id === "Vendor ID") {
      setVendorID(data);
    } else if (id === "Page Variable Type") {
      setPageVariableType(data);
    } else if (id === "Action Type") {
      setActionType(data);
    } else if (id === "Page Variable Value") {
      setPageVariableValue(data);
    } else if (id === "Version") {
      setVersion(data);
    } else if (id === "Description") {
      setDesc(data);
    } else if (id === "Fields") {
      setFields(data);
    }
  };

  const handleSendData = e => {
    e.preventDefault();
    fetch("https://admin-dev.rivn.com/edit-vendor-form", {
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
          header="Page Variable Type"
          value={
            vendorInfo.page_variable_type === null
              ? "null"
              : vendorInfo.page_variable_type
          }
          handleAdd={handleSetData}
        />
        <EditContentItem
          header="Page Variable Value"
          value={
            vendorInfo.page_variable_value === null
              ? "null"
              : vendorInfo.page_variable_value
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
        <UniqueContent
          header="Description"
          handleAdd={handleSetData}
          value={
            vendorInfo.description === "" ? "null" : vendorInfo.description
          }
        />
        <UniqueContent
          header="Fields"
          handleAdd={handleSetData}
          value={vendorInfo.fields}
        />
        <div className="content-item-choice">
          <div className="item">
            <h2>Active</h2>
            <select
              onChange={e =>
                setActive(e.target.options[e.target.selectedIndex].text)
              }
            >
              <option value="y">y</option>
              <option value="n">n</option>
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
export default EditVendorForm;
