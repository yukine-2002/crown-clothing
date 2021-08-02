import React from 'react';
import './menu-item.style.css';
import { withRouter } from 'react-router-dom';
const MenuItem = (props) => (
    <div className="menu-item" onClick={()=> props.history.push(`${props.match.url}${props.value.linkUrl}`)}>
        <div className="background-img" style = {
            {
                backgroundImage: `url(${props.value.imageUrl})`
            }
        } />
        <div className="content">
            <p className="title">
                {props.value.title}
            </p>
            <span className="subtitle">
                 {props.value.linkUrl}
            </span>
        </div>
     </div>
)

export default withRouter(MenuItem);