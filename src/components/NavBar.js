import React from 'react';
import {Link} from "react-router-dom"

const NavBar = () => {
    return <div className="nav-bar">
    <Link to="/">New Vendor</Link>
    <Link to="/edit-vendor">Edit Vendor</Link>
    <Link to="/list-all">Registered Vendor List</Link>
</div>
}
 
export default NavBar;