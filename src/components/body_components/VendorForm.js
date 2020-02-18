import React from "react";

import ContentItem from "./content-item";
import VendorId from "./vendor-id";

const VendorForm = props => {
  const [name, setName] = React.useState("");
  const [vendorID, setVendorID] = React.useState("");
  const [actionType, setActionType] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [display, setDisplay] = React.useState("");
  const [pageVariableType, setPageVariableType] = React.useState("");
  const [pageVariableValue, setPageVariableValue] = React.useState("");
  const [version, setVersion] = React.useState("");
  const [fields, setFields] = React.useState("");
  const [active, setActive] = React.useState("");
  const [showStyle, setShowStyle] = React.useState("hidden");
  const [createdText, setCreatedText] = React.useState("");
  const [id, setId] = React.useState("");
  let data = {
    name: name,
    vendor_id: props.id,
    action_type: actionType,
    description: desc,
    display: display,
    page_variable_type: pageVariableType,
    page_variable_value: pageVariableValue,
    version: version,
    active: active,
    fields: fields
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
    }
  };

  const handleSend = e => {
    e.preventDefault();

    fetch("http://localhost:5000/new-vendor-form", {
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
          setCreatedText("Created!");
          setShowStyle("visible");
        } else if (res.ALREADY_EXISTS === true) {
          setCreatedText("ERROR! Vendor Already exists in Database!");
          setShowStyle("visible");
        } else if (res.CREATED === false) {
          setCreatedText("ERROR! Not Created!");
          setShowStyle("visible");
        }
      });
  };

  return (
    <div className="content-wrapper">
      <form onSubmit={handleSend}>
        <div className="upperPage">
          <div className="grid-item">
            <ContentItem header="Name" handleAdd={handleSetData} />
            {/* <ContentItem header="Vendor ID" handleAdd={handleSetData} /> */}
            <VendorId handleAdd={handleSetData} id={props.id} />
            <ContentItem header="Action Type" handleAdd={handleSetData} />
            <div
              className="content-item-lower"
              style={{ "padding-left": "20px" }}
            >
              <h2>Description</h2>
              <textarea type="text" onChange={e => setDesc(e.target.value)} />
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
            <div className="button-div">
              <button type="submit">Submit</button>
              <p style={{ visibility: showStyle }}>{createdText}</p>
            </div>
          </div>
          <div className="grid-item">
            <ContentItem
              header="Page Variable Type"
              handleAdd={handleSetData}
            />
            <ContentItem
              header="Page Variable Value"
              handleAdd={handleSetData}
            />
            <ContentItem header="Version" handleAdd={handleSetData} />
            <div
              className="content-item-lower"
              style={{ "padding-left": "20px" }}
            >
              <h2>Fields</h2>
              <textarea type="text" onChange={e => setFields(e.target.value)} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VendorForm;
