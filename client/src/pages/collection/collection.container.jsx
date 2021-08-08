import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";


import { selectCollectionLoading } from "../../redux/shop/shop.selectors";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import CollectionPage from './collection.component'

const mapStateToProps = (state) => ({
    isLoading : !selectCollectionLoading(state)
})

const CollectionPageComponent = compose(
    connect(mapStateToProps),
    WithSpinner

)(CollectionPage)

export default CollectionPageComponent;