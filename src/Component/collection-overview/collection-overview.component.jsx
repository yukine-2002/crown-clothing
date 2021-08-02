import React from 'react';
import './collection-overview.style.css';
import { connect } from 'react-redux';
import CollectionPreview from '../../Component/preview-colection/preview-collection.component';
import { selectorCollectionForPreview } from '../../redux/shop/shop.selector';

const CollectionOverView = ({collection}) => (
    <div className="collection-overview">
         {collection.map (({id,...otherCollection}) => <CollectionPreview key={id} {...otherCollection} /> )} 
    </div>
)

const mapStateToProps = (state) => ({
    collection :selectorCollectionForPreview(state)
})

export default connect(mapStateToProps)(CollectionOverView);