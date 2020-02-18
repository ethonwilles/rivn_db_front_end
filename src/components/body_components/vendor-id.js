import React from "react";

const vendorId = props => {
  return (
    <div className="content-item">
      <h2>Vendor ID</h2>
      <input type="text" value={props.id} />
    </div>
  );
};
export default vendorId;
