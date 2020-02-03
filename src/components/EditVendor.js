import React from 'react';

import Header from "./header"
import NavBar from "./NavBar"

import "../styles/main.scss"

const EditVendor = (props) => {
    return <div className="edit-vendor">
        <Header />
        <div className="page-wrapper">
        <NavBar />
        </div>
    </div>;
}
 
export default EditVendor;