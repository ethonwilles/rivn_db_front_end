import React from "react";

import EditContentItem from "../edit-page-components/editcontentitem";

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
            {console.log(newImage)}
            <img src={reader.readAsDataURL(newImage)} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditCatalog;
