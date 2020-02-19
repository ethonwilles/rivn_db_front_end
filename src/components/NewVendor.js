import React from "react";

import Header from "./header";
import NavBar from "./NavBar";
import Catalog from "./body_components/Catalog";
import VendorForm from "./body_components/VendorForm";

import rivnLogo from "../images/rivn_logo.png"
import "../styles/main.scss";



const NewVendor = props => {
  const jerUsername = process.env.REACT_APP_JER_USERNAME
  const jerPass = process.env.REACT_APP_JER_PASSWORD
  const [id, setId] = React.useState("");
  const [auth, setAuth] = React.useState(false)
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [loginVis, setLoginVis] =React.useState("hidden")
  const [loginText, setLoginText] = React.useState("")
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
    auth ? <div className="NewVendor">
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
    </div> : 
    <div className="authPage">
      
      <div className="login-box">
      <div className="image-div">
        <img src={rivnLogo} alt="RivnLogo"></img>
        <h2>Database Login</h2>
        
      </div>
        <form onSubmit={e =>{
          e.preventDefault()
          
          if(jerUsername != username){
            setLoginText("Wrong Username!")
            setLoginVis("visible")
          }
          else if(jerPass != password){
            setLoginVis("visible")
            setLoginText('Wrong Password!')
          }
          if(jerUsername == username && jerPass == password){
            setAuth(true)
          }else{
            console.log("didnt'work")
          }
        }
        }>
          <div className="input-box">
            <p>Username</p>
          <input type='text' onChange={e => setUsername(e.target.value)}/>
          </div>
          <div className="input-box">
            <p>Password</p>
          <input type='text' onChange={e => setPassword(e.target.value)}/>
          </div>
          <button type="submit">Submit</button>
          <p className="error"style={{"visibility":`${loginVis}`}}>{loginText}</p>
        </form>
      </div>
    </div>
  );
};
export default NewVendor;
