import React from 'react';
import CollectionOverView from '../../Component/collection-overview/collection-overview.component';
import { Route } from 'react-router-dom';
import Collections from '../collection/collection.component';


const ShopPage =({match}) => {
  console.log(match)
    return  (
       <div className='shop-page'>
          <Route exact path = {`${match.path}`} component={CollectionOverView} />
           <Route path ={`${match.path}/:CollectionsId`} component={Collections} />
       </div>
    )
        
}
   
export default ShopPage;