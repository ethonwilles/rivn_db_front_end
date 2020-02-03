import React from 'react';

import ContentItem from "./content-item"

const Catalog = () => {
    return <div className="content-wrapper">
        <form>
        <div className="upperPage">
        <div className="grid-item">
        <ContentItem header="Name" />
        <ContentItem header="Vendor ID" />
        <div className="content-item">
            <h2>Image</h2>
            <input style={{"width": "100px", "height": "50px"}} />
            <div className="content-item-lower">
                <h2>Description</h2>
                <textarea type='text'/>
            </div>
        </div>
        <div className="button-div">
        <button type="submit">Submit</button>
        </div>
        </div>
        <div className="grid-item">
        <ContentItem header="Action URL"/>
        <ContentItem header="Action Type" />
        <ContentItem header="Version"/>
        <div className="dif">
            <div className="item">
                <h2>Display</h2>
                <select>
                    <option value="Y">Y</option>
                    <option value="N">N</option>
                </select>
        </div>
        <div className="item">
                <h2>Active</h2>
                <select>
                    <option value="Y">Y</option>
                    <option value="N">N</option>
                </select>
        </div>



    </div>
        </div>
    </div>
    
    </form>
    </div>
}
 
export default Catalog;