import React from "react";

import ContentItem from "./content-item";
import VendorId from "./vendor-id";

const Catalog = props => {
  const [name, setName] = React.useState("");
  const [vendorID, setVendorID] = React.useState("");
  const [image, setImage] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [actionUrl, setActionUrl] = React.useState("");
  const [actionType, setActionType] = React.useState("");
  const [version, setVersion] = React.useState("");
  const [display, setDisplay] = React.useState("");
  const [active, setActive] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [showStyle, setShowStyle] = React.useState("hidden");
  const [createdText, setCreatedText] = React.useState("");
  const [id, setId] = React.useState("");

  let data = {
    name: name,
    vendor_id: props.id,
    image: image,
    description: desc,
    action_url: actionUrl,
    action_type: actionType,
    version: version,
    display: display,
    active: active
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
    }
  };

  const handleSend = e => {
    e.preventDefault();
    fetch("https://rivn-db-backend.herokuapp.com/new-vendor-catalog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
            <div className="created"></div>

            <ContentItem header="Name" handleAdd={handleSetData} />

            <VendorId handleAdd={handleSetData} id={props.id} />
            <div className="content-item">
              <h2>Image</h2>
              <input onChange={e => setImage(e.target.value)} />
              <div className="content-item-lower">
                <h2>Description</h2>
                <textarea type="text" onChange={e => setDesc(e.target.value)} />
              </div>
            </div>
            <div className="button-div">
              <button type="submit">Submit</button>
              <p style={{ visibility: showStyle }}>{createdText}</p>
            </div>
          </div>
          <div className="grid-item">
            <ContentItem header="Action URL" handleAdd={handleSetData} />
            <ContentItem header="Action Type" handleAdd={handleSetData} />
            <ContentItem header="Version" handleAdd={handleSetData} />
            <div className="dif">
              <div className="item">
                <h2>Display</h2>
                <select
                  onChange={e =>
                    setDisplay(e.target.options[e.target.selectedIndex].text)
                  }
                >
                  <option value="nil">Select</option>
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
                  <option value="nil">Select</option>
                  <option value="Y">Y</option>
                  <option value="N">N</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Catalog;
