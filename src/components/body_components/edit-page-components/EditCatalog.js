import React from "react";

import EditContentItem from "../edit-page-components/editcontentitem";
import UniqueContent from "./uniquecontent";

const EditCatalog = () => {
  const [newImage, setNewImage] = React.useState("");
  const [source, setSource] = React.useState("");
  var reader = new FileReader();
  reader.onload = function(e) {
    setSource(e.target.result);
  };
  return (
    <div className="content-wrapper">
      <EditContentItem header="Action URL" value="Dummy Value" />
      <EditContentItem header="Action Type" value="dummy Value" />
      <EditContentItem header="Version" value="dummy vbalue" />
      <div className="content-item">
        <h2>Image</h2>
        <div className="inputs">
          <div className="old">
            <p>Old Entry: </p>
            <input type="text" value="asdf" />
          </div>
          <div className="new">
            <p>New Entry: </p>
            <input type="file" onChange={e => reader.read(e.target.files[0])} />
          </div>
        </div>
      </div>
      <UniqueContent header="Description" />
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
export default EditCatalog;
