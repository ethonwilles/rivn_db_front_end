import React from "react";

import Header from "./header";
import NavBar from "./NavBar";
import Catalog from "./body_components/Catalog";
import VendorForm from "./body_components/VendorForm";

import "../styles/main.scss";

const NewVendor = props => {
  const [id, setId] = React.useState("");
  const newId = () => {
    const alpha = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    ];
    const numer = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let idArray = [];
    for (let increment = 0; increment <= 10; increment++) {
      const ranCheck = Math.floor(Math.random() * 2 + 1);
      const ranSlot = Math.floor(Math.random() * 10);

      if (ranCheck === 1) {
        idArray.push(alpha[ranSlot]);
      } else if (ranCheck === 2) {
        idArray.push(numer[ranSlot]);
      }
    }

    return idArray.join("");
  };
  React.useEffect(() => {
    setId(newId());
  }, []);
  const [check, setCheck] = React.useState(true);
  return (
    <div className="NewVendor">
      <Header />
      <div className="page-wrapper">
        <NavBar />
        <div className="body-content">
          <div className="button-wrapper">
            <button onClick={() => setCheck(true)}>Catalog</button>
            <button onClick={() => setCheck(false)}>VendorForm</button>
          </div>
          {check === true ? <Catalog id={id} /> : <VendorForm id={id} />}
        </div>
      </div>
    </div>
  );
};
export default NewVendor;
