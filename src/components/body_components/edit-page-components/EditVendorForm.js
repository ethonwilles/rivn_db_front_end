import React from "react";

import EditContentItem from "./editcontentitem";
import UniqueContent from "./uniquecontent";

const EditVendorForm = () => {
  return (
    <div className="content-wrapper">
      <EditContentItem header="Page Variable Type" value="dummy value" />
      <EditContentItem header="Page Variable Value" value="dummy value" />
      <EditContentItem header="Action Type" value="dummy value" />
      <EditContentItem header="Version" value="dummy value" />
      <UniqueContent header="Description" />
      <UniqueContent header="Fields" />
      <div className="content-item-choice">
        <div className="item">
          <h2>Display</h2>
          <select>
            <option value="Y">Y</option>
            <option value="N">N</option>
          </select>
        </div>
        <div className="item">
          <h2>Active</h2>
          <select>
            <option value="Y">Y</option>
            <option value="N">N</option>
          </select>
        </div>
      </div>
      <div className="button-div-edit">
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};
export default EditVendorForm;
