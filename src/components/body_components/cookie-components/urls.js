import React from "react";
import EditContentItem from "./editurlitem";

const URLS = () => {
  const [vendorName, setVendorName] = React.useState();
  const [currentVendor, setCurrentVendor] = React.useState();
  const [vendorInfo, setVendorInfo] = React.useState();
  const [backgroundColorChoice, setBackgroundColorChoice] = React.useState();
  const [vis, setVis] = React.useState("hidden");
  const [firstVis, setFirstVis] = React.useState("hidden");
  const [resData, setResData] = React.useState("visible");

  const getCookies = e => {
    e.preventDefault();
    fetch("https://admin-dev.rivn.com/urls", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        vendor_id: currentVendor,
        change: false
      })
    })
      .then(res => res.json())
      .then(data => {
        handleCheckVendor(data);
      });
  };
  const handleCheckVendor = data => {
    console.log("data", data);
    if (data.SUCCESS == false || data.USER_FOUND == false) {
      setFirstVis("visible");
    } else {
      setFirstVis("hidden");
      setVendorInfo(data.cookies);

      fetch("https://admin-dev.rivn.com/get-vendor-catalog", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          vendor_id: currentVendor,
          method: "vendor_id"
        })
      })
        .then(res => res.json())
        .then(data => {
          setVendorName(data.name);
        });
    }
  };
  const handleSet = e => {
    e.preventDefault();
    let cookie_string = [];
    let items = Array.from(document.getElementsByClassName("edit-input"));
    items.forEach(elem => {
      cookie_string.push(elem.value);
    });
    console.log("Cookie List ", cookie_string);

    fetch("https://admin-dev.rivn.com/urls", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        vendor_id: currentVendor,
        change: true,
        cookie_list: cookie_string.join(" ")
      })
    })
      .then(res => res.json())
      .then(data => helpShow(data));

    const ITEMS = Array.from(document.getElementsByClassName("temp"));
    ITEMS.forEach(elem => {
      elem.remove();
    });
  };
  const helpShow = d => {
    if (d.SUCCESS) {
      setResData("Saved!");
      setVis("visible");
      setBackgroundColorChoice("lightgreen");
    } else {
      setResData("Not Saved! Hit Submit Again.");
      setVis("visible");
      setBackgroundColorChoice("pink");
    }
  };
  const renderCookies = () => {
    console.log(vendorInfo);
    return vendorInfo.map(elem => {
      if (elem != "") {
        return <EditContentItem value={elem} />;
      }
    });
  };

  const addNew = e => {
    e.preventDefault();
    let newElem = document.createElement("input");
    newElem.classList.add("edit-input");
    newElem.classList.add("temp");
    newElem.placeholder = "Enter new URL ID";
    document.querySelector(".wrapper").appendChild(newElem);
  };
  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={getCookies}>
          <input
            type="text"
            placeholder="Enter Vendor ID to get URLS.."
            onChange={e => setCurrentVendor(e.target.value)}
          />
          <h1 style={{ visibility: firstVis, backgroundColor: "pink" }}>
            ERROR! Can't find Vendor. Try Again...
          </h1>
          <h1>{vendorName}</h1>
        </form>
      </div>

      <form onSubmit={handleSet} className="render-items">
        <h2>URLS Found:</h2>

        {vendorInfo ? renderCookies() : <h3>Enter A Vendor ID to Begin</h3>}
        <div className="wrapper"></div>
        <button onClick={addNew}>+</button>
        <button type="submit" className="submit">
          Submit
        </button>
        <h1
          className="checked"
          style={{ visibility: vis, backgroundColor: backgroundColorChoice }}
        >
          {resData}
        </h1>
      </form>
    </div>
  );
};
export default URLS;
