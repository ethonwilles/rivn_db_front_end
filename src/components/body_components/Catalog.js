import React from "react";
import axios from "axios"

import ContentItem from "./content-item";

const Catalog = () => {
  const [name, setName] = React.useState("")
  const [vendorID, setVendorID] = React.useState("")
  const [image, setImage] = React.useState("")
  const [desc, setDesc] = React.useState("")
  const [actionUrl, setActionUrl] = React.useState("")
  const [actionType, setActionType] = React.useState("")
  const [version, setVersion] = React.useState("")
  const [display, setDisplay] = React.useState("")
  const [active, setActive] = React.useState("")
  const [show, setShow] = React.useState(false)
  const [showStyle, setShowStyle] = React.useState("hidden")
  const [createdText, setCreatedText] = React.useState("")
  const handleSetData = (data, id) =>{
    if(id === "Name"){
      setName(data)
    }else if(id === "Vendor ID"){
      setVendorID(data)
    }else if(id === "Action URL"){
      setActionUrl(data)
    }else if(id === "Action Type"){
      setActionType(data)
    }else if(id === "Version"){
      setVersion(data)
    }
   
  }

  const handleSend = e =>{
    e.preventDefault()
    // fetch("http://localhost:5000/new-vendor-catalog", {
    //   method: "POST",
    //   headers: {'Access-Control-Allow-Origin' : "*"},
    //   body: {"name": name, "vendor_id": vendorID, "image": image, "description": desc, "action_type": actionType, "action_url": actionUrl, "version": version, "active":active, "display": display}
      
    // }).then(res => res.json()).then(data => console.log(data))
    axios.post("http://localhost:5000/new-vendor-catalog", {
      
      "name": name, "vendor_id": vendorID, "image": image, "description": desc, "action_type": actionType, "action_url": actionUrl, "version": version, "active":active, "display": display
    }).then(res => {
      console.log(res, res.data.CREATED)
      if(res.data.CREATED === true){
        console.log("working")
        setCreatedText("Created!")
        setShowStyle("visible")
        
        
      }else if(res.data.ALREADY_EXISTS === true){
        setCreatedText("ERROR! Vendor Already exists in Database!")
        setShowStyle("visible")
      }else if(res.data.CREATED === false){
        setCreatedText("ERROR! Not Created!")
        setShowStyle("visible")
      }
    })
  }
  return (
    <div className="content-wrapper">
       
      <form onSubmit={handleSend}>
      
        <div className="upperPage">
          
          <div className="grid-item">
            <div className="created">
             
            </div>
          
            <ContentItem header="Name"  handleAdd={handleSetData}/>
            <ContentItem header="Vendor ID"  handleAdd={handleSetData}/>
            <div className="content-item">
              <h2>Image</h2>
              <input  onChange={e => setImage(e.target.value)}/>
              <div className="content-item-lower">
                <h2>Description</h2>
                <textarea type="text" onChange={e => setDesc(e.target.value)}/>
              </div>
            </div>
            <div className="button-div">
              <button type="submit">Submit</button>
              <p style={{"visibility" : showStyle}}>{createdText}</p>
            </div>
          </div>
          <div className="grid-item">
            <ContentItem header="Action URL"  handleAdd={handleSetData}/>
            <ContentItem header="Action Type"  handleAdd={handleSetData}/>
            <ContentItem header="Version" handleAdd={handleSetData} />
            <div className="dif">
              <div className="item">
                <h2>Display</h2>
                <select onChange={e => setDisplay(e.target.options[e.target.selectedIndex].text)}>
                <option value="nil">Select</option>
                  <option value="Y">Y</option>
                  <option value="N">N</option>
                </select>
              </div>
              <div className="item">
                <h2>Active</h2>
                <select onChange={e => setActive(e.target.options[e.target.selectedIndex].text)}>
                  <option value="nil">Select</option>
                  <option value="Y">Y</option>
                  <option value="N">N</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Catalog;
