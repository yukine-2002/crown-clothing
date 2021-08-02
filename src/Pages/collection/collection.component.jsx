import React from 'react';

import './collection.style.css';
import { selectorCollection } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';
import CollectionItem from '../../Component/collection-item/collection-item.component'
const Collections = ({collections})=> {
    console.log(collections)
    const {title,items} = collections;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>

            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item = {item} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state,ownProps) => ({
    collections : selectorCollection(ownProps.match.params.CollectionsId)(state),
    
})

export default connect(mapStateToProps)(Collections);