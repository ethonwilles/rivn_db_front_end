import React from 'react';

const ContentItem = (props) => {
    return <div className="content-item">
        <h2>{props.header}</h2>
        <input type="text" />
    </div>
}
 
export default ContentItem;