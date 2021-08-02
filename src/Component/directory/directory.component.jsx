import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.css';
import { connect } from 'react-redux';
import { selectorDirectorySections } from '../../redux/directory/directory.selector';
const Directory =({sections}) => {
  
    return (
            <div className="directory-menu">
               {sections.map ( data => <MenuItem key ={data.id} value ={data} />)} 
            </div>
        )
       
    
}

const mapStateToProps = (state) => ({
  sections : selectorDirectorySections(state)
})
export default connect(mapStateToProps)(Directory);