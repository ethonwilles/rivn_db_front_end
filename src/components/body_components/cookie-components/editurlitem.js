import React from "react";

const EditContentItem = props => {
  const [temp, setTemp] = React.useState();

  return (
    <div className="content-item">
      <div className="inputs">
        <div className="old">
          <p>Old Cookie: </p>
          <input type="text" value={props.value} />
        </div>
        <div className="new">
          <p>New Cookie: </p>
          <input
            type="text"
            placeholder="Leave blank to delete URL ID"
            onChange={e => setTemp(e.target.value)}
            className="edit-input"
          />
        </div>
      </div>
    </div>
  );
};

export default EditContentItem;
