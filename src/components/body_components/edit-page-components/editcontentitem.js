import React from "react";

const EditContentItem = props => {
  return (
    <div className="content-item">
      <h2>{props.header}</h2>
      <div className="inputs">
        <div className="old">
          <p>Old Entry: </p>
          <input type="text" value={props.value} />
        </div>
        <div className="new">
          <p>New Entry: </p>
          <input type="text" placeholder="Leave Blank to use old Entry.." />
        </div>
      </div>
    </div>
  );
};

export default EditContentItem;
