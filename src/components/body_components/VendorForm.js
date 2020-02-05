import React from "react";

import ContentItem from "./content-item";

const VendorForm = () => {
  return (
    <div className="content-wrapper">
      <form>
        <div className="upperPage">
          <div className="grid-item">
            <ContentItem header="Name" />
            <ContentItem header="Vendor ID" />
            <ContentItem header="Action Type" />
            <div
              className="content-item-lower"
              style={{ "padding-left": "20px" }}
            >
              <h2>Description</h2>
              <textarea type="text" />
            </div>
            <div className="item">
              <h2>Display</h2>
              <select>
                <option value="Y">Y</option>
                <option value="N">N</option>
              </select>
            </div>
            <div className="button-div">
              <button type="submit">Submit</button>
            </div>
          </div>
          <div className="grid-item">
            <ContentItem header="Page Variable Type" />
            <ContentItem header="Page Variable Value" />
            <ContentItem header="Version" />
            <div
              className="content-item-lower"
              style={{ "padding-left": "20px" }}
            >
              <h2>Fields</h2>
              <textarea type="text" />
            </div>
            <div className="item">
              <h2>Active</h2>
              <select>
                <option value="Y">Y</option>
                <option value="N">N</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VendorForm;
