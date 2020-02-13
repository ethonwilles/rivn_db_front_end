import React from "react";

const EditContentItem = props => {
  const changed = e => {
    props.handleAdd(e.target.value, props.header);
  };
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
          <input
            type="text"
            placeholder="Leave Blank to use old Entry.."
            onChange={changed}
          />
        </div>
      </div>
    </div>
  );
};

export default EditContentItem;
