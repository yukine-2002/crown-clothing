import React,{useEffect} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

// import { selectorIsCollectionFetching } from '../../redux/shop/shop.selectors';

// import WithSpinner from '../../components/with-spinner/with-spinner.component';

// import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
// import CollectionPage from '../collection/collection.component';

// import { selectCollectionLoading } from '../../redux/shop/shop.selectors';

import collectionsOverviewComponent from '../../components/collections-overview/collections-overview.component';


import CollectionPageComponent from '../../pages/collection/collection.container'

const ShopPage = ({fetchCollectionsStart,match}) => {
 
    useEffect ( () => {
      fetchCollectionsStart();
    },[fetchCollectionsStart]);
 



    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={collectionsOverviewComponent}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component = {CollectionPageComponent}
        />
      </div>
    );
  }


// const mapStateToProps = (state) => ({
//   isFetchingLoading : selectorIsCollectionFetching(state),
//   isCollectionLoading : selectCollectionLoading(state)
// })

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart : () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
