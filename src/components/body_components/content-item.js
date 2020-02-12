import React from 'react';

const ContentItem = (props) => {

    const changed = e =>{
        props.handleAdd(e.target.value,props.header)
    }
    return <div className="content-item">
        <h2>{props.header}</h2>
        <input type="text" onChange={changed}/>
    </div>
}
 
export default ContentItem;