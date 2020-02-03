import React from 'react';


import Header from "./header"
import NavBar from "./NavBar"
import Catalog from "./body_components/Catalog"
import VendorForm from './body_components/VendorForm'

import "../styles/main.scss"


const NewVendor = (props) => {
    const [check, setCheck] = React.useState(true)
    return <div className="NewVendor">
       <Header />
       <div className="page-wrapper">
        <NavBar />
        <div className="body-content">
            
        <div className="button-wrapper">
            <button onClick={() => setCheck(true)}>Catalog</button>
            <button onClick={() => setCheck(false)}>VendorForm</button>
        </div>
        {check === true ? <Catalog />: <VendorForm/>}
        </div>
    </div>
    </div>
}
export default NewVendor;


