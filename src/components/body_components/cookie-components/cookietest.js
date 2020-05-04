import React from "react";

const Cookies = () => {
  const [ids, setIds] = React.useState();
  React.useEffect(() => {});

  const renderItems = () => {
    fetch("http://localhost:5000/get-cookies")
      .then(res => res.json())
      .then(data =>
        data["ids"].map(elem => {
          return <option value={elem}>{elem}</option>;
        })
      );
  };
  return (
    <div>
      <select>
        <option value="default">Choose Vendor to edit..</option>
        {renderItems()}
      </select>
    </div>
  );
};
export default Cookies;
