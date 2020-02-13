import React from "react";

const UniqueContent = props => {
  const changed = e => {
    props.handleAdd(e.target.value, props.header);
  };
  return (
    <div className="content-item">
      <h2>{props.header}</h2>
      <div>
        <p>Old Entry: </p>
        <textarea type="text" value={props.value} />
      </div>
      <div>
        <p>New Entry: </p>
        <textarea type="text" onChange={changed} />
      </div>
    </div>
  );
};
export default UniqueContent;
